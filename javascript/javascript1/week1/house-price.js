//calculation for Peter
let width=8;
let depth=10;
let height=10;
let gardernSize=100;
let volumeInMeters=width*depth*height;
let housePrice=volumeInMeters*2.5*1000 + gardernSize*300;
console.log("width = " +width+" m");
console.log("depth = " +depth+" m");
console.log("height = " +height+" m");
console.log("VOlume = " +volumeInMeters+" m2");
console.log("Gardern size = "+gardernSize+" m2");
console.log("Calculated price = dkk "+housePrice);

if(housePrice<=2500000)
    console.log("its a good buy for Peter " + housePrice);
else
    console.log("its not a good buy for Peter " + housePrice); 

console.log("=========================================================");

//calculations for Julia

width=5;
depth=11;
height=8;
gardernSize=70;
volumeInMeters=width*depth*height;
housePrice=volumeInMeters*2.5*1000 + gardernSize*300;
console.log("width = " +width+" m");
console.log("depth = " +depth+" m");
console.log("height = " +height+" m");
console.log("VOlume = " +volumeInMeters+" m2");
console.log("Gardern size = "+gardernSize+" m2");
console.log("Calculated price = dkk "+housePrice);
    if(housePrice<=1000000)
        console.log("its a good buy for Julia " + housePrice);
    else
        console.log("its not a good buy for Julia " + housePrice); 
    
    