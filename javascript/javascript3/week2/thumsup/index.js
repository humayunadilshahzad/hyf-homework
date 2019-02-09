function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.classList.add(`gradient-${getRandomInt(1, 4)}`);
///////////////////////////////////////////////////////////////////////

const cars = [
    {
        manufacturer: 'Porsche',
        model: '911',
        price: 1135000,
        img: 'cars/porsche.png'
    },
    {
        manufacturer: 'Nissan',
        model: 'GT-R',
        price: 90000,
        img: 'cars/nissan.jpg'
    }, {
        manufacturer: 'Jaguar',
        model: 'lux',
        price: 554000,
        img: 'cars/jaguar.jpg'
    }, {
        manufacturer: 'Aston Martin',
        model: 'GA',
        price: 765000,
        img: 'cars/astonmartin.jpg'
    }, {
        manufacturer: 'Mercedes AMG',
        model: 'amg',
        price: 705000,
        img: 'cars/amg.jpg'
    }, {
        manufacturer: 'Audi',
        model: 'A8',
        price: 765000,
        img: 'cars/audi.jpg'
    }, {
        manufacturer: 'Mercedes Benz S',
        model: 'S',
        price: 625000,
        img: 'cars/benzs.jpg'
    }, {
        manufacturer: 'Jeep',
        model: 'abc',
        price: 345000,
        img: 'cars/jeep.jpg'
    }, {
        manufacturer: 'Bentley',
        model: 'ux',
        price: 1035000,
        img: 'cars/bentley.jpg'
    }, {
        manufacturer: 'Lamborghini',
        model: 'xyz',
        price: 635000,
        img: 'cars/lamborghini.jpg'
    }
];

let init;
let arrayPopulateLi = document.querySelectorAll('li');

for (init = 0; init < arrayPopulateLi.length; init++) {
    arrayPopulateLi[init].innerHTML = '';
    let carTitle = document.createElement('h3');
    carTitle.innerHTML = cars[init].manufacturer;

    let carImg = document.createElement('img');
  /*   carImg.width = 250;
    carImg.height = 150;
 */    carImg.src = cars[init].img;

    arrayPopulateLi[init].appendChild(carTitle);
    arrayPopulateLi[init].appendChild(carImg);
}




let index = -1;
const arrayLi = Array.from(document.querySelectorAll("ul>li"));

let thumup = document.body.getElementsByClassName('accept')[0];

thumup.addEventListener('click', () => {

    animateLiOut().then
    animateNextLiIntoView();

});

function animateLiOut(i) {
    index++;
    if (index <= 9)
        arrayLi[index].style = "transform:translateX(1000px)";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 700);
    })
}

function animateNextLiIntoView() {
    arrayLi[index + 1].style = "opacity: 1; transform: scale(1);";
}

//////////////////////Thumb Down//////////////////////////

let thumDown = document.body.getElementsByClassName('reject')[0];
thumDown.addEventListener('click', () => {
    animateLiIn().then
    animateNextLiIntoView();

});

function animateLiIn(i) {
    index++;
    if (index <= 9)
        arrayLi[index].style = "transform:translateX(-1000px)";

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 7000);
    })
}

function animateNextLiIntoView() {
    if (index <= 8)
        arrayLi[index + 1].style = "opacity: 1; transform: scale(1);";
}

