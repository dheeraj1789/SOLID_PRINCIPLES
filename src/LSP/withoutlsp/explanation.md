# The Liskov Substitution Principle (LSP) states

 that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. In other words, derived classes should be able to be used in place of their base classes without introducing unexpected behavior.

Let's illustrate the LSP using TypeScript code examples:

```
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

```

In this example, we have a Rectangle class and a Square class that extends it. However, the Square class violates the Liskov Substitution Principle because it changes the behavior of the base class methods setWidth and setHeight. While a square is a special case of a rectangle, it behaves differently by enforcing equal width and height.

Now, consider the following usage scenario:

```
function printArea(rectangle: Rectangle): void {
  rectangle.setWidth(5);
  rectangle.setHeight(4);
  console.log(`Area: ${rectangle.calculateArea()}`);
}

const rectangle = new Rectangle(6, 3);
const square = new Square(6);

printArea(rectangle); // Output: Area: 20
printArea(square); // Output: Unexpected result: Area: 36 (incorrect)

```

In this case, when we try to substitute a Square object for a Rectangle object, the behavior of the program becomes incorrect. The square's equal width and height properties lead to an unexpected area calculation.
