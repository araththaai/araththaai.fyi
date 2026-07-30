import fs from 'fs';
import path from 'path';

const COMPONENTS_DIR = path.resolve('apps/client/src/components');

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Replace next/link
  if (content.includes('next/link')) {
    content = content.replace(/import\s+Link\s+from\s+['"]next\/link['"];?/g, 'import { Link } from "react-router-dom";');
    // Replace href= with to=
    content = content.replace(/<Link([^>]+)href=/g, '<Link$1to=');
    changed = true;
  }
  
  // Replace next/image or next-cloudinary
  if (content.includes('next-cloudinary') || content.includes('next/image')) {
    content = content.replace(/import\s+\{\s*CldImage\s*\}\s+from\s+['"]next-cloudinary['"];?/g, '');
    content = content.replace(/import\s+Image\s+from\s+['"]next\/image['"];?/g, '');
    content = content.replace(/<(CldImage|Image)([^>]+)\/?>/g, (match, tag, attrs) => {
      // Very basic transform, removing `fill`, `sizes`, `config`
      let newAttrs = attrs.replace(/fill/g, '').replace(/sizes="[^"]+"/g, '').replace(/config=\{[^}]+\}/g, '');
      return `<img${newAttrs} />`;
    });
    content = content.replace(/<\/(CldImage|Image)>/g, '');
    changed = true;
  }

  // Replace next/navigation
  if (content.includes('next/navigation')) {
    content = content.replace(/import\s+\{.*\}\s+from\s+['"]next\/navigation['"];?/g, (match) => {
      let routerImports = [];
      if (match.includes('useRouter')) routerImports.push('useNavigate');
      if (match.includes('usePathname')) routerImports.push('useLocation');
      return routerImports.length > 0 ? `import { ${routerImports.join(', ')} } from "react-router-dom";` : '';
    });
    content = content.replace(/useRouter\(\)/g, 'useNavigate()');
    content = content.replace(/usePathname\(\)/g, 'useLocation().pathname');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      migrateFile(fullPath);
    }
  }
}

walk(COMPONENTS_DIR);
console.log('Components migration completed successfully.');
