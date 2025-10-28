const { execSync } = require('child_process');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

async function runRelease() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'versionType',
        message: 'Which version type do you want to bump?',
        choices: ['patch', 'minor', 'major'],
        default: 'patch',
      },
    ]);

    const versionType = answers.versionType;

    console.log(`Running npm version ${versionType}...`);
    execSync(`npm version ${versionType}`, { stdio: 'inherit' });

    // Ensure a clean build by removing the dist directory before building
    const distPath = path.join(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      console.log('Removing existing dist directory...');
      fs.rmSync(distPath, { recursive: true, force: true });
    }

    console.log('Building project...');
    execSync('rollup -c --bundleConfigAsCjs', { stdio: 'inherit' });

    console.log('Publishing package...');
    execSync('npm publish --access public', { stdio: 'inherit' });

    console.log('Release done!');
  } catch (err) {
    console.error('Error during release:', err);
    process.exit(1);
  }
}

runRelease();
