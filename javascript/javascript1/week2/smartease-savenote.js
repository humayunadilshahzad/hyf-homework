let notes;
console.log(notes);
notes=[];
console.log(notes);

function addNote(des, id){
    let note ={
        noteId: id,
        note: des
    };
    notes.push(note);
}

addNote("I am a disco dancer",1);
console.log(notes);