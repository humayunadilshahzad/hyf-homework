
let query = '&q=excited';
const number = 25;
let button = document.querySelector("button");
//const giffCount = document.querySelector("input").value;

button.addEventListener("click", () => {
  //  clearImages();

    fetch(getUrl())
        .then((res) => res.json())
        .then(giphy => {
            showGiffs(giphy);
        });
});

function showGiffs(gif) {

    for (let i = 0; i < gif.data.length; i++) {
        const newImg = document.createElement("img");
        newImg.src = gif.data[i].images.original.url;
        document.body.appendChild(newImg);
    }
}

function getUrl() {
    const giphyAPI = ' &api_key=k8n8Se49SnbKxcGIAAuT9FRY7UHeMmTl';
    let limit = 25;
    //    const giphySDK_API = '&api_key=q3qDR3vWra7pXlJaKMXfI6Lg4NRbRzOy';
    const gifcount = document.getElementById('gifCount').value;
    const gifQuery = document.getElementById('query').value;
    if (gifcount > 0 && gifcount < 101)
        limit = gifcount;
    if (gifQuery)
        query = '&q=' + gifQuery;

    const giffyUrl = 'http://api.giphy.com/v1/gifs/search?' + giphyAPI + query + '&limit=' + limit;

    return giffyUrl;

}

function clearImages() {
    let images = document.getElementsByTagName("img");
    if (images.length > 0)
      //  console.log(images.length);
    for (let i = 0; i < images.length; i++)
        //images[i].parentNode.removeChild(images[i]);
        document.getElementsByTagName('img')[i].remove();


}