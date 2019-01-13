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
   newdiv.style.padding=("10px");
  // newdiv.style.paddingBottom=("10px");
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
    let val;
    let br;
    let inerDiv;



    for(i=0; i<books.length; i++){
//creating and appending innerdiv
        inerDiv=document.createElement('div');
        inerDiv.style.width='90%';
        inerDiv.style.height='auto';
        inerDiv.style.margin='auto';
        inerDiv.style.backgroundColor='darkgray';
   
        inerDiv.style.padding='5px';
        inerDiv.style.marginBottom='10px';
        newdiv.appendChild(inerDiv);

// creating image of book and appending
        pic=document.createElement("img");
        pic.style.width="110px";
        pic.style.height="130px";
        pic.style.float="right";
        pic.style.clear="both";

        pic.src=books[i].img;
        inerDiv.appendChild(pic);

        
        for(var propt in books[i]){

            if(propt=='title')

                {
                l=document.createElement('label');
                l.innerHTML=propt + '  :  ';
                l.style.fontWeight='bold';
                inerDiv.appendChild(l);

                val=document.createElement('h3');
                val.style.marginBottom='0px';
                val.style.marginTop='0px';
                val.style.textAlign='center';
                val.innerHTML=books[i][propt];
                inerDiv.appendChild(val);
                
           
                }
            else if(propt!='img')
                {
                l=document.createElement('label');
                l.innerHTML=propt + '  :  ';
                l.style.fontWeight='bold';
                inerDiv.appendChild(l);
    
                val=document.createElement('label');
                val.innerHTML=books[i][propt];
                inerDiv.appendChild(val);
    

                }

                br=document.createElement('br');
                inerDiv.appendChild(br);


         }

     
    }
        

    }

createDiv();
addList();
