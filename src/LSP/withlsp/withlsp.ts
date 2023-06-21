abstract class Shape {
    abstract calculateArea(): number;
  }
  
  class Rectangle extends Shape {
    constructor(protected width: number, protected height: number) {
      super();
    }
  
    setWidth(width: number): void {
      this.width = width;
    }
  
    setHeight(height: number): void {
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  class Square extends Shape {
    constructor(private sideLength: number) {
      super();
    }
  
    setSideLength(sideLength: number): void {
      this.sideLength = sideLength;
    }
  
    calculateArea(): number {
      return this.sideLength * this.sideLength;
    }
  }
class PrintAreaOfShape { 

     printArea(shape: Shape): void {
        console.log(`Area: ${shape.calculateArea()}`);
      }
      
      const rectangle = new Rectangle(6, 3);
      const square = new Square(6);
      
      printArea(rectangle); // Output: Area: 18
      printArea(square); // Output: Area: 36
}  