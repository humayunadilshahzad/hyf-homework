let notes;

//undefined
console.log(notes);
notes=[];

//empty array
console.log(notes);

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
function getNoteFormID(id){
    //checking if ID is number or not
    if(isNaN(id)){
        console.log("Entered value is not a Number !...");
        return;
    }
    let i,s=0; 

    //finding a specific node on ID
    for(i=0;i<notes.length;i++)
        if(id==notes[i]["noteId"])
            {s=1;
            break;}   
    //displaying node if found or not 
       if(s==1)
            console.log(notes[i]["note"]);
        else
            console.log("ID "+id + " not found");
    
}

//console.log(notes);

getNoteFormID("4");