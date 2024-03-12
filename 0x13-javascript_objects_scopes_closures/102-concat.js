#!/usr/bin/node
const rd = require('rd');
const a = rd.readFileSync(process.argv[2], 'utf8');
const b = rd.readFileSync(process.argv[3], 'utf8');
rd.writeFileSync(process.argv[4], a + b);
