let titles =["raja_gid", "c++","VB","JS","DOM","hasil_ghat","rahat","SQL","CSS","HTML"];

function addPera(){
let p=document.createElement("p");
let t=document.createTextNode("some text");
p.appendChild(t);
document.body.appendChild(p);
}


function addList(){
    let newdiv=document.createElement("div");
   newdiv.style.height=("210px");
   newdiv.style.backgroundColor=("lightgray");
   newdiv.style.border=("1px", "solid gray");
   newdiv.style.width=("80%");
   newdiv.style.margin=("auto");
   newdiv.style.marginTop =("50px");

    document.body.appendChild(newdiv);
    let list = document.createElement("ul");
    let listElement = document.createElement("li");
    
    for(i=0; i<titles.length; i++){
        listElement = document.createElement("li");
        listElement.innerHTML=titles[i];
        list.appendChild(listElement);
        newdiv.appendChild(list);
    }
}

addPera();
addList();