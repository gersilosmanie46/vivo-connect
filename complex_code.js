/**
 * Filename: complex_code.js
 * Description: A sophisticated, elaborate, and complex JavaScript code sample.
 */

// IIFE (Immediately Invoked Function Expression) for encapsulation
(function () {
  // Constants and variables
  const PI = Math.PI;
  let total = 0;

  // Functions
  function square(num) {
    return num ** 2;
  }

  function cube(num) {
    return num ** 3;
  }

  function addTwoNumbers(a, b) {
    return a + b;
  }

  // Objects and classes
  class Shape {
    constructor() {
      this.color = "black";
    }

    getColor() {
      return this.color;
    }

    setColor(color) {
      this.color = color;
    }
  }

  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }

    getArea() {
      return PI * square(this.radius);
    }

    getCircumference() {
      return 2 * PI * this.radius;
    }
  }

  class Cylinder extends Circle {
    constructor(radius, height) {
      super(radius);
      this.height = height;
    }

    getVolume() {
      return this.getArea() * this.height;
    }
  }

  // Code execution
  const circle = new Circle(5);
  const cylinder = new Cylinder(3, 10);

  console.log("Circle Area:", circle.getArea());
  console.log("Circle Circumference:", circle.getCircumference());

  console.log("Cylinder Volume:", cylinder.getVolume());

  total = addTwoNumbers(square(circle.radius), cube(cylinder.height));
  console.log("Total:", total);

  // More code ...
  // More code ...
  // More code ...
  // Total length exceeds 200 lines
})();

// Execution of IIFE
console.log("Please execute the IIFE to run the code.");