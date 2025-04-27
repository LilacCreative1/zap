const fs = require('fs');
const path = require('path');

// Folders you want to fix imports inside
const foldersToFix = ['components', 'pages'];

foldersToFix.forEach(folder => {
  const dirPath = path.join(__dirname, folder);
  fs.readdirSync(dirPath).forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.lstatSync(filePath).isFile() && path.extname(file) === '.js') {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = content.replace(/(["'])\.\/(.*?)\.js(["'])/g, '$1./$2.jsx$3');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
    }
  });
});


