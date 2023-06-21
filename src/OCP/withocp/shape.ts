abstract class Shape {
    abstract calculateArea(): number;
  }
  
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(private radius: number) {
      super();
    }
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  