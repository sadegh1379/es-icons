const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.resolve(__dirname, '../src/components/icons');
const INDEX_FILE = path.join(ICONS_DIR, 'index.ts');

// Get all .tsx files (excluding index.ts itself)
const files = fs.readdirSync(ICONS_DIR).filter(f => f.endsWith('.tsx') && f !== 'index.ts');

// Generate PascalCase export statements
const exportLines = files.map(file => {
  const name = path.basename(file, '.tsx');
  const exportName = toPascalCase(name);
  return `export { default as ${exportName} } from './${name}';`;
});

// Write to index.ts
fs.writeFileSync(INDEX_FILE, exportLines.join('\n') + '\n');
console.log('✅ index.ts updated.');

function toPascalCase(str) {
  return str
    .split(/[-_]/)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}
