console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;

console.log(argv);


var command  = process.argv[2];

if(command=== 'add'){
    notes.addNote(argv.title,argv.body);
}else if(command=== 'list'){
    notes.getAll();
}else if(command=== 'remove'){
    notes.removeNote(argv.title);
}
else {
    console.log('none');
}