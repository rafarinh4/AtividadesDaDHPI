const fs = require('fs');

const pessoas = require('./testeModulos');

let rafa = fs.readFileSync(__dirname + '/rafa.txt', 'utf8');
console.log(rafa);
console.log(pessoas);