// Get today's date
const today = new Date();
let daystomeet=10;
console.log("In "+daystomeet+" days");
daystomeet += today.getDay();
let day=daystomeet%7;

function findmeetingDay(day){
  
  if(day===0)
    return  "Sunday";
else if(day===1)
    return "Monday";
else if(day===2)
    return "Tuesday";
else if(day===3)
    return "Wednesday";
else if(day===4)
    return "Thursday";
else if(day===5)
    return "Friday";
else
    return "Saturday";
}
let meetingday=findmeetingDay(day);

console.log("We are meeting on : " +meetingday);


