const fs = require('fs');
const path = require('path');

const folders = [
  'public',
  'src',
  'src/components',
  'src/pages',
  'src/layouts',
  'src/styles'
];

const files = [
  'public/index.html',
  'src/index.tsx',
  'src/App.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/pages/HomePage.tsx',
  'src/pages/LoginPage.tsx',
  'src/layouts/MainLayout.tsx',
  'src/layouts/AuthLayout.tsx',
  'src/styles/global.css'
];

// Tạo thư mục
folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(`Created folder: ${folder}`);
  }
});

// Tạo file
files.forEach(file => {
  const filePath = path.resolve(file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
    console.log(`Created file: ${file}`);
  }
});
