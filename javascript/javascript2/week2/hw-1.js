

function myFunction(intial, final, isThree, isFive){
    let count = 0,i;
    let arr=[];
    
    for(i=intial; i<=final;i++)
        arr.push(i);
  
    for(i=0; i<arr.length;i++)
        if(arr[i]%3 ==0 && arr[i]%5 ==0)
            {isThree();
            isFive();}    
    
        else if(arr[i]%3 ==0)
            isThree();
        else if(arr[i]%5 ==0)
            isFive(); 
}
const isThreeMultiple = function(){
    
  console.log("multple of 3");
}

const isFiveMultiple = () => {
    console.log("multiple of 5");
}

myFunction(20, 30, isThreeMultiple, isFiveMultiple);