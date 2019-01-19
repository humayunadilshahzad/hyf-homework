

/*Create an array with 3 items. All items should be functions. Go through the array and call them*/ 

 let functionArray=[ add= (a,b)=>{console.log(a+b); },sub= (a,b)=>{console.log(a-b)},print=function(){console.log("bismillah")}];
for(let i=0 ; i< functionArray.length ; i++)
    if(i<2)
        functionArray[i](5,5);
    else
        functionArray[i]();;

console.log(typeof(functionArray[0]));
console.log(typeof(functionArray[1]));
console.log(typeof(functionArray[2]));
 
/****Create a function as a const and try creating a function normally. Call both function******** */
 
function myFun(){
    console.log("normal function called");
}

const myConstFun = function(){
    console.log("const function called");
} 


myFun();
myConstFun();



/****object having a key that has a function as value**** */

let myObjectHasFunction={
    name: "Humayun",
    fun: function objFunction(){ console.log("function with in an object is called"); }
    
};

console.log(myObjectHasFunction.name);
myObjectHasFunction.fun();



/****  setTimeout functions***** */


setTimeout(myConstFun,2000);
setTimeout(()=>{console.log("anonomous function called");}, 5000);

/*****function returning a function****** */

let outer=()=>{
    let inner;
    return inner=()=>{
        console.log("inner function callled");
    } 
}   

let returnOfOuter= outer();
console.log(typeof(returnOfOuter));
returnOfOuter();
