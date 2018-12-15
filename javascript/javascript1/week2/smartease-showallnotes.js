let notes=[];

//function to add note
function addNote(des, id){
    let note ={
        noteId: id,
        note: des
    };
    notes.push(note);
}


//adding three node elements in array
addNote("I am a disco dancer",1);
addNote("You are a disco dancer",2);
addNote("We are disco dancer",3);

//function to find and display node
function showAllNotes(){

    //checking if array has not any node
    if(notes.length<=0){
        console.log("No Note entered!...");
        return;
    }
    
    for(i=0;i<notes.length;i++)
        console.log("Note with the ID: " +notes[i]["noteId"]+" has Note : "+notes[i]["note"]);
     
}

showAllNotes();