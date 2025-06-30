const fs = require('fs');
const files = ['index.html', 'moonGame.html'];
for (const f of files) {
  try {
    fs.accessSync(f, fs.constants.F_OK);
  } catch (err) {
    console.error(`${f} not found`);
    process.exit(1);
  }
}
console.log('All files exist');
