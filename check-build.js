const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Checking project setup...\n');

// Check package.json
console.log('📦 Package.json check:');
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
  console.log('✅ package.json is valid');
  
  // Check required scripts
  const requiredScripts = ['build', 'dev', 'preview'];
  const missingScripts = requiredScripts.filter(script => !pkg.scripts?.[script]);
  
  if (missingScripts.length > 0) {
    console.error(`❌ Missing scripts in package.json: ${missingScripts.join(', ')}`);
  } else {
    console.log('✅ All required scripts are present');
  }
} catch (e) {
  console.error('❌ Error reading package.json:', e.message);
}

// Check node_modules
console.log('\n📂 Node modules check:');
const nodeModulesExist = fs.existsSync('node_modules');
if (nodeModulesExist) {
  console.log('✅ node_modules directory exists');
  
  // Check for critical packages
  const requiredPackages = ['vite', 'react', 'react-dom', '@vitejs/plugin-react'];
  const missingPackages = [];
  
  for (const pkg of requiredPackages) {
    try {
      require.resolve(pkg);
    } catch {
      missingPackages.push(pkg);
    }
  }
  
  if (missingPackages.length > 0) {
    console.error(`❌ Missing required packages: ${missingPackages.join(', ')}`);
    console.log('\n🔄 Installing missing packages...');
    try {
      execSync(`npm install ${missingPackages.join(' ')} --save${missingPackages.some(p => p === 'vite' || p.startsWith('@vitejs/')) ? '-dev' : ''}`, { stdio: 'inherit' });
      console.log('✅ Successfully installed missing packages');
    } catch (error) {
      console.error('❌ Failed to install missing packages:', error.message);
    }
  } else {
    console.log('✅ All required packages are installed');
  }
} else {
  console.error('❌ node_modules directory is missing');
  console.log('\n🔄 Running npm install...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Successfully installed dependencies');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
  }
}

// Check public directory
console.log('\n📁 Public directory check:');
try {
  const publicFiles = fs.readdirSync('public');
  console.log('✅ Public directory exists');
  
  const requiredFiles = ['_redirects'];
  const missingFiles = requiredFiles.filter(file => !publicFiles.includes(file));
  
  if (missingFiles.length > 0) {
    console.error(`❌ Missing required files in public directory: ${missingFiles.join(', ')}`);
    
    // Create _redirects file if missing
    if (missingFiles.includes('_redirects')) {
      console.log('\n📝 Creating _redirects file...');
      fs.writeFileSync('public/_redirects', '/* /index.html 200');
      console.log('✅ Created _redirects file');
    }
  } else {
    console.log('✅ All required files are present in public directory');
  }
} catch (e) {
  console.error('❌ Error checking public directory:', e.message);
}

// Check src directory
console.log('\n📂 Source directory check:');
try {
  const srcFiles = fs.readdirSync('src');
  console.log('✅ src directory exists');
  
  const requiredDirs = ['components', 'App.tsx', 'main.tsx'];
  const missingDirs = requiredDirs.filter(dir => !srcFiles.includes(dir) && !fs.existsSync(`src/${dir}`));
  
  if (missingDirs.length > 0) {
    console.error(`❌ Missing required files/directories in src: ${missingDirs.join(', ')}`);
  } else {
    console.log('✅ All required source files/directories are present');
  }
} catch (e) {
  console.error('❌ Error checking src directory:', e.message);
}

// Try to run the build
console.log('\n🏗️  Attempting to build the project...');
try {
  console.log('\n📦 Running npm run build...\n');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('\n✅ Build completed successfully!');
} catch (error) {
  console.error('\n❌ Build failed with error:', error.message);
  
  // If build fails, try to get more detailed error
  console.log('\n🔍 Running Vite build with debug flag...\n');
  try {
    execSync('npx vite build --debug', { stdio: 'inherit' });
  } catch (viteError) {
    console.error('\n❌ Vite build failed with error:', viteError.message);
  }
}

console.log('\n✨ Project check completed!');
