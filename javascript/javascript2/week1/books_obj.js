let books = [
    {
    id: "harry_potter_and_the_philosophers_stone",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    language: "English",
    img: "./book-images/Harry_Potter.jpeg"
    },

    {
    id: "Raja_gidh",
    title: "Raja Gidh",
    author: "Bano Qudsia",
    language: "Urdu",
    img: "./book-images/raja_gidh.jpg"
    },

    {
    id: "programming_using_C++",
    title: "Programming using C++",
    author: "Robert Lefore",
    language: "English",
    img: "./book-images/object-oriented-programming-in-c.jpeg"
    }
    ,

    {
    id: "Visual_Basic",
    title: "Learn Visual Basic in 21 Days",
    author: "Magraw Hill",
    language: "English",
    img: "./book-images/vb-21days.jpg"

    },

    {
    id: "Document_abject_model",
    title: "Document Object Model",
    author: "Dittle & Dittle",
    language: "English",
    img: "./book-images/dom.jpg"
    }
];



let newdiv=document.createElement("div");

function createDiv(){
   newdiv.style.height=("auto");
   newdiv.style.backgroundColor=("lightgray");
   newdiv.style.border=("1px", "solid black");
   newdiv.style.paddingLeft=("10px");
   newdiv.style.paddingBottom=("10px");
   newdiv.style.width=("80%");
   newdiv.style.margin=("auto");
   newdiv.style.marginTop =("2px");
   newdiv.style.marginTop =("50px");
   document.body.appendChild(newdiv);
}


function addList(){
    let disptitle;
    let pic;
    let l;
    let tbox;
    
    for(i=0; i<books.length; i++){

       //crating, styling and appending book title 
       disptitle= document.createElement("h3")
       disptitle.style.color="blue";
       disptitle.style.marginBottom ="0px";
       disptitle.innerHTML=books[i].title;
       newdiv.appendChild(disptitle);
        
       // creating image of book and appending
       pic=document.createElement("img");
       pic.style.width="80px";
     // pic.style.float="right";
      pic.style.clear="both";

       pic.src=books[i].img;
       newdiv.appendChild(pic);

       //creating and populating label for ID and text for ID's value (text box styling a bit aswell )
       l= document.createElement("label");
       l.innerHTML="ID: "
       
       tbox=document.createElement("input");
       tbox.value=books[i].id;
       tbox.style.width="280px"; 

       newdiv.appendChild(l);
       newdiv.appendChild(tbox);


      
        //creating and populating label for Author and text for Author's value 
        l= document.createElement("label");
        l.innerHTML="Author:  "
        l.style.marginLeft="50px";
        tbox=document.createElement("input");
        tbox.value=books[i].author;

        newdiv.appendChild(l);
        newdiv.appendChild(tbox);



        //creating and populating label for Language and text for Language's value 
        l= document.createElement("label");
        l.innerHTML="Language:  "
        l.style.marginLeft="50px";
        tbox=document.createElement("input");
        tbox.value=books[i].language;

        newdiv.appendChild(l);
        newdiv.appendChild(tbox);
       
    }
}
createDiv();
addList();

//looping through the object it self and it can be used to crate right nuber of html elements required for objects in an array
/*
for(i=0;i<5;i++){
for(var propt in books[i]){
    alert(propt  + ': ' + books[i][propt]);
}}*/