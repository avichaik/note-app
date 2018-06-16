
const fs = require('fs');

console.log('starting notes.js');

var notes = [];

var addNote = (title,body)=>{
    var notes =  getAll();
    var note = {
        title,body
    };
    var dup = notes.filter((note)=>note.title===title);
    if(dup!=null)
    {
        console.log('aleady exist');
        return;
    }

    notes.push (note);
    saveNotes(notes);

console.log('adding ' + title);
};

var removeNote = (title)=>{
    
console.log('removing ' + title);
};
var getNote = (title)=>{
    
    console.log('get' + title);
    };
var getAll = ()=>{
    try
    {
        var notesString = fs.readFileSync('notes.json');
        
        return JSON.parse(notesString);

    } catch(e){
        //console.log('no file');
        return [];
        
    }
    
    };

    var saveNotes = (notes)=>{
        console.log('saved');
        fs.writeFileSync('notes.json',JSON.stringify(notes));
        console.log('saved');

    };

module.exports = {
    addNote,
    removeNote,
    getAll,
    getNote
};

