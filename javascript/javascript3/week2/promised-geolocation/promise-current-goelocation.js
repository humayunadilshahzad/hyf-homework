function currentGeoLocation() {
    return new Promise((resolve, reject) => {

        console.log('getting your current geo location...');

        setTimeout(() => {
            
            if (navigator.geolocation) {
                function getLocation() {
                    navigator.geolocation.getCurrentPosition(showPosition)
                }
                function showPosition(position) {
                    resolve(position.coords);
                }
                getLocation();
            }

            else
                reject("error: navigator not supported in this browser");
        }, 3000);
    });
}



currentGeoLocation()
    .then(currentLocation => console.log(currentLocation.latitude, currentLocation.longitude))
    .catch(err => console.log(err));