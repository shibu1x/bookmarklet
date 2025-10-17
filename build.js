const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'main.js');
const outputFile = path.join(__dirname, 'bookmarklet.txt');

// main.jsを読み込む
const code = fs.readFileSync(inputFile, 'utf8');

// 改行とインデントを削除してミニファイ
const bookmarklet = code
  .replace(/\n/g, '')
  .replace(/\s+/g, ' ')
  .trim();

// ファイルに出力
fs.writeFileSync(outputFile, bookmarklet, 'utf8');

// コンソールにも出力
console.log('Bookmarklet generated:');
console.log(bookmarklet);
console.log(`\nSaved to: ${outputFile}`);
