class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get Diameter() {
        return this.radius * 2;
    }
    get Circumference() {
        return (this.radius * 2 * Math.PI).toFixed(2);
    }
    get Area() {
        return (Math.pow(this.radius, 2) * Math.PI).toFixed(2);
    }

}

const c1 = new Circle(5);
console.log(`Radius of circle : ${c1.radius} 
Diameter of circle  : ${c1.Diameter}
Circumference of circle  : ${c1.Circumference}
Area of circle : ${c1.Area} `);
// console.log(c1.Diameter);
// console.log(c1.Circumference);
// console.log(c1.Area);
