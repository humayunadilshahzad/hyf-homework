let myButton=document.getElementsByTagName("button");
myButton[0].addEventListener("click",() => {
    let enteredNumber= document.getElementsByTagName("input")[0].value;
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
}
const isThreeMultiple = function(){
    document.body.style.backgroundColor="blue";
}

const isFiveMultiple = () => {
    document.body.style.backgroundColor="red";
}

