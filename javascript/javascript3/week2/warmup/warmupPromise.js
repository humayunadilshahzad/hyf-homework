

function mypromise(millisecondsToResolve){
    return new Promise(function(resolve) {
        
        setTimeout(function() {
            resolve({name:'promis',
                     status:'resolved',});
        }, millisecondsToResolve);
  });
}
  
mypromise(3000).then(val=>{console.log(val);});



/*  --------------------------------- */



    

function notThisFunctionName(millisecondsToResolve){
    return new Promise(function(resolve) {
        console.log(millisecondsToResolve);
        setTimeout(function() {
            resolve('I am resolved asynchronously after '+ millisecondsToResolve+' milli Seconds');
        }, millisecondsToResolve);
  });
}
  
notThisFunctionName(6000).then(val=>{console.log(val);});


//notThisFunctionName().then((a)=>{console.log(a)})

