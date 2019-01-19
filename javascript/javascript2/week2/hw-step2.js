let myButton=document.getElementsByTagName("button");
myButton[0].addEventListener("click",() => {
    let enteredNumber= document.getElementsByTagName("input")[0].value;
    if (enteredNumber=="")
       { alert("must enter a value first");
        document.getElementsByTagName("input")[0].focus();}

    else    
    myFunction( enteredNumber, isThreeMultiple, isFiveMultiple);
});

function myFunction(n, isThree, isFive){
          
        let count=1,id;
 
        if(n%3 ==0 && n%5 ==0)
        id = setInterval(() => {
            if(count%2==0)
                isThree();
            else    
                isFive();
        count++;
        if (count == 8)
            clearInterval(id);
        }, 300);
            
    
        else if(n%3 ==0)
            isThree();
        else if(n%5 ==0)
            isFive(); 
        else
            alert("not a multiple of 3 of 5");
}
const isThreeMultiple = function(){
    document.body.style.backgroundColor="blue";
}

const isFiveMultiple = () => {
    document.body.style.backgroundColor="red";
}




/***************************************/ 

/* let functionArray=[ add= (a,b)=>{console.log(a+b); },sub= (a,b)=>{console.log(a-b)},print=function(){console.log("bismillah")}];
for(let i=0 ; i< functionArray.length ; i++)
    if(i<2)
        functionArray[i](5,5);
    else
        functionArray[i];

console.log(typeof(functionArray[0]));
console.log(typeof(functionArray[1]));
console.log(typeof(functionArray[2]));
 */        
/************************************************ */
 /*
function myFun(){
    console.log("normal function called");
}

const myConstFun(){

} */