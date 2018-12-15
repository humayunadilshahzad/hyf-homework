let activities=[],  s=0, totalTime=0;;
const limit= 100;

//function adding activity node
function addActivity(dat, activ, dura){
    let activity={
        date: dat,
        activity: activ,
        duration: dura
    };

activities.push(activity);
}

//calling adactivity
addActivity("14/12/18","youtube",30);
addActivity("14/12/18","facebook",45);
addActivity("14/12/18","youtube",15);
addActivity("14/12/18","youtube",30);

//function show status
function showStatus(act){
    let i, sum=0;
//checking if no activity has been recorded yet
    if(activities.length<=0)
        {
            console.log("No activities recorded!.....Need to record some befor.....");
            return;
        }

//adding duration to gether for a specific avtivity
    for(i=0; i<activities.length; i++){
        if(activities[i]["activity"]==act)
           sum += activities[i]["duration"];
//calculating total time spent on all activities
        totalTime += activities[i]["duration"];
    }

if(totalTime>=limit)
    s=1;
   


//logging total time spent on specific activity

    if(sum>0)
        console.log("Total minuits spent on " + act + " are : " +sum);
    else
        console.log("you have not spent any time on "+ act);

}

console.log(activities);
showStatus("facebook");

if(s==1)
console.log("NO more phoning today because u have crossed the limit: " +totalTime);