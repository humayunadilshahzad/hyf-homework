//function returning three empty objects
function myFunction(){
    var objArray = [{},{},{}];
    return objArray;
    }
console.log(myFunction());


// getting return in a veriable

function myFunction(){
    var objArray = [{},{},{}];
    return objArray;
    }
var colorObjects = myFunction();
console.log(colorObjects);


// assinging color properties in objects and displaying 

function myFunction(){
    var objArray = [{},{},{}];
    return objArray;
    }
var colorObjects = myFunction();
colorObjects[0].color="red";
colorObjects[1].color="green";
colorObjects[2].color="blue";

console.log(colorObjects);


// loging using loop

function myFunction(){
    var objArray = [{},{},{}];
    return objArray;
    }
var colorObjects = myFunction();
colorObjects[0].color="red";
colorObjects[1].color="green";
colorObjects[2].color="blue";
var i;
for(i=0;i<colorObjects.length;i++)
    console.log(colorObjects[i]);




// funtion with 3 perameters

function myFunction(color1,color2,color3){
    var objArray = [{color:color1},{color:color2},{color:color3}];
    return objArray;
    }
var colorObjects = myFunction("red","blue","yellow");
var i;
for(i=0;i<colorObjects.length;i++)
    console.log(colorObjects[i]);


