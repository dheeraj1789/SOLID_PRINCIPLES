class Rectangle {
    constructor(protected width: number, protected height: number) {}
  
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
  
  class Square extends Rectangle {
    setWidth(width: number): void {
      this.width = width;
      this.height = width;
    }
  
    setHeight(height: number): void {
      this.height = height;
      this.width = height;
    }
  }
class PrintArea {
    
    function printArea(rectangle: Rectangle): void {
        rectangle.setWidth(5);
        rectangle.setHeight(4);
        console.log(`Area: ${rectangle.calculateArea()}`);
      }
      
      const rectangle = new Rectangle(6, 3);
      const square = new Square(6);
      
      printArea(rectangle); // Output: Area: 20
      printArea(square); // Output: Unexpected result: Area: 36 (incorrect)
      
}  