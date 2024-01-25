const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const A = BigInt(input[0]);
const B = BigInt(input[1]);
console.log(`${A + B}\n${A - B}\n${A * B}`);
