
// applying filtering callback and maping times two callback to an array

let oddEven = [ 2,5,8,11,15,16,19,22,25];
const odd= oddEven.filter(value => { if(value% 2!=0) return value;});
const timesTwo = odd.map(x =>{return x*2;});
console.log(oddEven);
console.log(odd);
console.log(timesTwo);
