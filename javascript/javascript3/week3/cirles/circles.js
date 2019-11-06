class Circle {
    constructor(x, y, radius, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;

    }

    drawCircle() {
        ctx.beginPath();
        ctx.fillStyle = this.fillColor;
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        ctx.fill();
    }
}

//////////////// end of class Circle

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");



setInterval(() => {

    const color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    const myCircle = new Circle(1000 * Math.random(), 500 * Math.random(), 30 * Math.random(), 0, 2 * Math.PI, color);
    console.log(800 * Math.random(), 500 * Math.random())
    myCircle.drawCircle();

}, 0);


//drawing Circle individualy 

//     const c = document.getElementById("myCanvas");
//     const ctx = c.getContext("2d");


//     ctx.beginPath()
//     ctx.fillStyle = "blue";
//     ctx.arc(800*Math.random(), 500*Math.random(), 40*Math.random(), 0, 2 * Math.PI);
//     ctx.fill();

//     // ctx.beginPath();
//     // ctx.fillStyle = "green";
//     // ctx.arc(235, 70, 10, 0, 2 * Math.PI);
//     // ctx.fill();

