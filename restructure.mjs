import fs from 'fs';
import path from 'path';

const ROOT_DIR = path.resolve('.');
const APPS_DIR = path.join(ROOT_DIR, 'apps');
const CLIENT_DIR = path.join(APPS_DIR, 'client');
const SERVER_DIR = path.join(APPS_DIR, 'server');
const DEST_SERVER_DIR = path.join(ROOT_DIR, 'server');

// 1. Move server to root
if (fs.existsSync(SERVER_DIR)) {
  fs.renameSync(SERVER_DIR, DEST_SERVER_DIR);
}

// 2. Read package.jsons
const rootPkg = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf-8'));
const clientPkg = JSON.parse(fs.readFileSync(path.join(CLIENT_DIR, 'package.json'), 'utf-8'));

// 3. Merge package.json
rootPkg.type = clientPkg.type;
rootPkg.dependencies = { ...rootPkg.dependencies, ...clientPkg.dependencies };
rootPkg.devDependencies = { ...rootPkg.devDependencies, ...clientPkg.devDependencies };

rootPkg.workspaces = ["server", "shared"];

rootPkg.scripts = {
  ...clientPkg.scripts,
  "dev": "concurrently \"vite --port 5173\" \"npm run dev --workspace=server\"",
  "build": "npm run build:client && npm run build:server",
  "build:client": "tsc && vite build",
  "build:server": "npm run build --workspace=server"
};

fs.writeFileSync(path.join(ROOT_DIR, 'package.json'), JSON.stringify(rootPkg, null, 2));

// 4. Move everything from apps/client to root
const clientFiles = fs.readdirSync(CLIENT_DIR);
for (const file of clientFiles) {
  if (file === 'package.json') continue; // We already merged this
  if (file === 'node_modules') continue; // Skip client's node_modules, we'll reinstall

  const srcPath = path.join(CLIENT_DIR, file);
  const destPath = path.join(ROOT_DIR, file);
  
  if (fs.existsSync(destPath)) {
    fs.rmSync(destPath, { recursive: true, force: true });
  }
  
  fs.renameSync(srcPath, destPath);
}

// 5. Remove apps dir
fs.rmSync(APPS_DIR, { recursive: true, force: true });

console.log('Migration to root complete.');
