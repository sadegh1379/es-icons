const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.resolve(__dirname, '../src/icons');
const STORYBOOK_FILE = path.resolve(__dirname, '../src/stories/icons.stories.tsx');
const INDEX_FILE = path.resolve(__dirname, '../src/index.ts');

function toPascalCase(str) {
  return str
    .split(/[-_]/)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

function updateStorybook() {
  console.log('🔄 Updating storybook with new icons...');
  
  // Get all .tsx files from icons directory
  const iconFiles = fs.readdirSync(ICONS_DIR)
    .filter(f => f.endsWith('.tsx'))
    .map(f => path.basename(f, '.tsx'));

  // Convert to PascalCase names
  const iconNames = iconFiles.map(toPascalCase);
  iconNames.sort(); // Sort alphabetically

  // Read current storybook file
  let storybookContent = fs.readFileSync(STORYBOOK_FILE, 'utf8');

  // Update imports section
  const importStart = storybookContent.indexOf('import {');
  const importEnd = storybookContent.indexOf("} from '../index';") + "} from '../index';".length;
  
  const newImports = `import {\n  ${iconNames.join(',\n  ')}\n} from '../index';`;
  
  storybookContent = storybookContent.substring(0, importStart) + 
                   newImports + 
                   storybookContent.substring(importEnd);

  // Update icons array
  const arrayStart = storybookContent.indexOf('const icons = [');
  const arrayEnd = storybookContent.indexOf('];', arrayStart) + 2;
  
  const iconEntries = iconNames.map(name => 
    `    { name: '${name}', component: ${name} }`
  );
  
  const newIconsArray = `const icons = [\n${iconEntries.join(',\n')}\n  ];`;
  
  storybookContent = storybookContent.substring(0, arrayStart) + 
                   newIconsArray + 
                   storybookContent.substring(arrayEnd);

  // Write updated content back to file
  fs.writeFileSync(STORYBOOK_FILE, storybookContent);
  
  console.log(`✅ Storybook updated with ${iconNames.length} icons`);
  console.log('📋 Updated icons:', iconNames.join(', '));
}

// Run if called directly
if (require.main === module) {
  updateStorybook();
}

module.exports = { updateStorybook };
