const fs = require('fs');
const path = require('path');

// Update Vehicles.tsx
const vehiclesPath = path.join(__dirname, 'src', 'components', 'Vehicles.tsx');
if (fs.existsSync(vehiclesPath)) {
    let content = fs.readFileSync(vehiclesPath, 'utf8');
    content = content
        .replace(/image: "photos\/([^"]+)"/g, 'image: "/images/vehicles/$1"');
    fs.writeFileSync(vehiclesPath, content, 'utf8');
    console.log('✅ Updated image paths in Vehicles.tsx');
}

// Update Team.tsx
const teamPath = path.join(__dirname, 'src', 'components', 'Team.tsx');
if (fs.existsSync(teamPath)) {
    let content = fs.readFileSync(teamPath, 'utf8');
    content = content
        .replace(/image: "\/([^\/"]+\.(?:png|jpg|jpeg|gif|webp))"/g, 'image: "/images/team/$1"')
        .replace(/image: "([^\/"][^\"]+\.(?:png|jpg|jpeg|gif|webp))"/g, 'image: "/images/team/$1"')
        .replace(/(src|logo)=\s*["']\/([^/"']+\.(?:png|jpg|jpeg|gif|webp))["']/g, '$1="/images/team/$2"');
    fs.writeFileSync(teamPath, content, 'utf8');
    console.log('✅ Updated image paths in Team.tsx');
}

// Update Sponsors.tsx
const sponsorsPath = path.join(__dirname, 'src', 'components', 'Sponsors.tsx');
if (fs.existsSync(sponsorsPath)) {
    let content = fs.readFileSync(sponsorsPath, 'utf8');
    
    // Update sponsor logo paths
    content = content
        .replace(/"logo": "\/ALTIN\/([^"]+)"/g, '"logo": "/images/sponsors/gold/$1"')
        .replace(/"logo": "\/SILVER\/([^"]+)"/g, '"logo": "/images/sponsors/silver/$1"')
        .replace(/"logo": "\/BRONZ\/([^"]+)"/g, '"logo": "/images/sponsors/bronze/$1"')
        .replace(/"logo": "\/SUPPORTER\/([^"]+)"/g, '"logo": "/images/sponsors/supporter/$1"');
    
    fs.writeFileSync(sponsorsPath, content, 'utf8');
    console.log('✅ Updated sponsor logo paths in Sponsors.tsx');
}

// Update Footer.tsx
const footerPath = path.join(__dirname, 'src', 'components', 'Footer.tsx');
if (fs.existsSync(footerPath)) {
    let content = fs.readFileSync(footerPath, 'utf8');
    content = content
        .replace(/src="\/([^/"']+\.(?:png|jpg|jpeg|gif|webp))"/g, 'src="/images/team/$1"');
    fs.writeFileSync(footerPath, content, 'utf8');
    console.log('✅ Updated logo path in Footer.tsx');
}

// Create a function to copy files for the build process
function copyFilesForBuild() {
    try {
        const fsExtra = require('fs-extra');
        const sourceDirs = [
            { from: 'public/images', to: 'dist/images' },
            { from: 'public/_redirects', to: 'dist/_redirects' }
        ];

        sourceDirs.forEach(({ from, to }) => {
            if (fs.existsSync(from)) {
                fsExtra.ensureDirSync(path.dirname(to));
                fsExtra.copySync(from, to, { overwrite: true });
                console.log(`✅ Copied ${from} to ${to}`);
            }
        });
    } catch (error) {
        console.log('⚠️  Could not copy files for build. Make sure to run "npm install fs-extra" if you need this functionality.');
    }
}

// Run the copy function after path updates
copyFilesForBuild();

console.log('\n✨ All image paths have been updated!');
console.log('\nNext steps:');
console.log('1. Run "npm run dev" to test your application locally');
console.log('2. Run "npm run build" to create a production build');
console.log('3. Deploy the "dist" folder to Netlify\n');

// List of files that were modified
console.log('Modified files:');
if (fs.existsSync(vehiclesPath)) console.log('- src/components/Vehicles.tsx');
if (fs.existsSync(teamPath)) console.log('- src/components/Team.tsx');
if (fs.existsSync(sponsorsPath)) console.log('- src/components/Sponsors.tsx');
if (fs.existsSync(footerPath)) console.log('- src/components/Footer.tsx');
console.log('\nDon\'t forget to check all images in your application!');
