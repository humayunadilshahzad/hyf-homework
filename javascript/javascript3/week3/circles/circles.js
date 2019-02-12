//////////////////Drawing Circle without class////////////////////////////////

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 100, 15, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();


/////////////////////// Deffining Class Circle ///////////////////////////////

class Circle {
    constructor(valueX, valueY, radius, startAngle, endAngle, color) {
        this.x = valueX;
        this.y = valueY;
        this.r = radius;
        this.sa = startAngle;
        this.endAngle = endAngle;
        this.color = color;
    }
    draw() {
        const canvas = document.getElementById('myCanvas');
        const context = canvas.getContext('2d');
        context.beginPath();
        context.arc(this.x, this.y, this.r, this.sa, this.endAngle);
        context.fillStyle = this.color;
        context.fill();
    }
};


/////////////////////////  Instanciating and Drawing Circles ///////////////


let Circle1 = new Circle(290, 70, 10, 0, 2 * Math.PI, 'green');
Circle1.draw();

let Circle2 = new Circle(150, 130, 20, 0, 2 * Math.PI, 'yellow');
Circle2.draw();

let Circle3 = new Circle(15, 10, 5, 0, 2 * Math.PI, 'blue');
Circle3.draw();




/////////////////////////  Instanciating and Drawing Circles (randomly every half second ) ///////////////


setInterval(() => {

    let x = Math.floor((Math.random() * 290));
    let y = Math.floor((Math.random() * 120));
    let r = Math.floor((Math.random() * 10 + 5));

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let circle = new Circle(x, y, r, 0, 2 * Math.PI, getRandomColor());
    circle.draw();

}, 500);


