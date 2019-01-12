
const spirits = ["wildcat","crying butterfly","The fullmoon wolf","Snow bear","Quick turtle","Hot dog","Lazy cow","Clever goat","sleeping owl","creepy witch"];


const btn = document.getElementsByTagName('button')[0];
btn.addEventListener("click", function(){

    let name = document.querySelector('input').value;
    //console.log(name);
    let index= Math.floor(Math.random()*10);


    let p=document.createElement("p");
    p.innerHTML=name + " - " + spirits[index];

    if(document.getElementsByTagName('p').length>0)
         document.body.removeChild(document.getElementsByTagName("p")[0]);
        

    document.body.appendChild(p);
    document.querySelector('button').innerHTML="Click again to see more";
    
});


const input = document.getElementsByTagName('input')[0];
input.addEventListener('blur', function(){



    let name = document.querySelector('input').value;
    //console.log(name);
    let index= Math.floor(Math.random()*10);
   

    let p=document.createElement("p");
    p.innerHTML=name + " - " + spirits[index];

    if(document.getElementsByTagName('p').length>0)
         document.body.removeChild(document.getElementsByTagName("p")[0]);
        

    document.body.appendChild(p);
    document.querySelector('button').innerHTML="Check again to see more";
    
});



input.addEventListener('focus', function(){
    let name = document.querySelector('input').value;
     if(name!="")
        document.querySelector('input').value="";

        
});