#!/usr/bin/node
const list = require('./100-data.js').lisT;
console.log(list);
console.log(list.map((item, index) => item * index));
