

function showWeather(){
    let city= document.body.getElementsByTagName('input')[0].value;
    
    // if (city=='')
    //     {alert('Please enter a valid city');
    //     document.body.getElementsByTagName('input')[0].focus;}
        
   let api ='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=4d856c1a51929406726a68ce90a0fcd6';


fetch(api)
    .then(response => response.json())
    .then((weather) => {

        // console.log(weather);
        // console.log(weather.name);
        // console.log(weather.sys.country , weather.weather[0].main , weather.weather[0].description , weather.weather[0].icon );

        // WRITE CODE HERE
        
        let icon=document.createElement('img'); 
        icon.className='weatherIcon';
        icon.src='http://openweathermap.org/img/w/'+weather.weather[0].icon+'.png';
        //document.body.appendChild(icon);
       
        let labCityCountry=document.createElement('label');
        labCityCountry.innerHTML=weather.name + '  ' + weather.sys.country;
        //document.body.appendChild(labCityCountry);
        
        let br=document.createElement('br');
        //document.body.appendChild(br);

        let labMain=document.createElement('label');
        labMain.innerHTML=weather.weather[0].main;
       // document.body.appendChild(labMain);

        let labDescription=document.createElement('label');
        labDescription.innerHTML=weather.weather[0].description;
        let br1=document.createElement('br');
        //document.body.appendChild(br1);
        //document.body.appendChild(labDescription);

        let myDiv= document.createElement('div');
        myDiv.className='divWeather';
        myDiv.appendChild(icon);
        myDiv.appendChild(labCityCountry);
        myDiv.appendChild(br);
        myDiv.append(labMain);
        myDiv.appendChild(br1);
        myDiv.appendChild(labDescription);

        document.body.appendChild(myDiv);



        icon.src='http://openweathermap.org/img/w/'+weather.weather[0].icon+'.png';
       

        
    }).catch(response=>{alert('enter valid city')})
  
}


///////////////////// TEST CODE //////////////////////////////////


// function showWeather(){
//     let city= document.body.getElementsByTagName('input')[0].value;
//     if (city=='')
//         {alert('Please enter a valid city');
//         document.body.getElementsByTagName('input')[0].focus;}
        
//    let api ='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=4d856c1a51929406726a68ce90a0fcd6';


// fetch(api)
//     .then(response => response.json())
//     .then((weather) => {
//         if(response.status!=400)
//         {console.log(weather);

//         console.log(weather.name);
//         console.log(weather.sys.country , weather.weather[0].main , weather.weather[0].description , weather.weather[0].icon );

//         WRITE CODE HERE

        
//         let icon=document.createElement('img'); 
//         icon.src='http://openweathermap.org/img/w/'+weather.weather[0].icon+'.png';
//         document.body.appendChild(icon);
//         }
//         else
//             alert(response.status);
        
//     }).catch(function(err){alert(err)});
  
// }
