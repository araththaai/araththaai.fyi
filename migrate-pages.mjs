import fs from 'fs';
import path from 'path';

const SRC_DIR = path.resolve('src/app');
const DEST_DIR = path.resolve('apps/client/src/pages');

function migrateFile(filePath, destPath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace next/link
  content = content.replace(/import\s+Link\s+from\s+['"]next\/link['"];?/g, 'import { Link } from "react-router-dom";');
  
  // Replace next/image
  content = content.replace(/import\s+Image\s+from\s+['"]next\/image['"];?/g, '');
  content = content.replace(/<Image([^>]+)>/g, (match, attrs) => {
    // Basic replace of Image to img
    return `<img${attrs}>`;
  });
  content = content.replace(/<\/Image>/g, '</img>');

  // Replace next/navigation
  content = content.replace(/import\s+\{.*\}\s+from\s+['"]next\/navigation['"];?/g, (match) => {
    let routerImports = [];
    if (match.includes('useRouter')) routerImports.push('useNavigate');
    if (match.includes('usePathname')) routerImports.push('useLocation');
    if (match.includes('useParams')) routerImports.push('useParams');
    return routerImports.length > 0 ? `import { ${routerImports.join(', ')} } from "react-router-dom";` : '';
  });
  content = content.replace(/useRouter\(\)/g, 'useNavigate()');
  content = content.replace(/usePathname\(\)/g, 'useLocation().pathname');

  // Handle metadata
  content = content.replace(/export\s+const\s+metadata[^;]+;/g, '');
  content = content.replace(/import\s+type\s+\{\s*Metadata\s*\}\s+from\s+['"]next['"];?/g, '');
  
  // Remove Next.js force-static, dynamic, etc
  content = content.replace(/export\s+const\s+(dynamic|revalidate)[^;]+;/g, '');

  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, content);
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'api' && file !== 'actions') {
        walk(fullPath);
      }
    } else if (file === 'page.tsx') {
      let relativePath = path.relative(SRC_DIR, fullPath);
      // Remove group folders like (public)
      relativePath = relativePath.replace(/\([^)]+\)[\\/]/g, '');
      
      let destPath = path.join(DEST_DIR, relativePath);
      migrateFile(fullPath, destPath);
    }
  }
}

walk(SRC_DIR);
console.log('Migration completed successfully.');
