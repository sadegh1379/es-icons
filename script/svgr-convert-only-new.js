const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const svgsDir = path.resolve('src/svgs');
const outputDir = path.resolve('src/icons');

const svgFiles = fs.readdirSync(svgsDir).filter(f => f.endsWith('.svg'));

svgFiles.forEach(file => {
  const baseName = path.basename(file, '.svg');
  const outFile = path.join(outputDir, `${baseName}.tsx`);

  if (fs.existsSync(outFile)) {
    console.log(`⏩ Skipping existing icon: ${baseName}`);
    return;
  }

  const inputPath = path.join(svgsDir, file);
  const cmd = `svgr --icon --typescript --filename-case kebab --replace-attr-values "#000=currentColor" --out-dir ${outputDir} ${inputPath}`;

  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`✅ Generated icon: ${baseName}`);
  } catch (error) {
    console.error(`❌ Failed to generate ${baseName}:`, error.message);
  }
});
