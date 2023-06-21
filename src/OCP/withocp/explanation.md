``` 
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

```

In this code, we have an abstract Shape class and two concrete implementations: Rectangle and Circle. Each shape calculates its area differently.

Now, let's say we want to introduce a new shape called Triangle without modifying the existing code:

```
 class Triangle extends Shape {
  constructor(private base: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}

```
By following the OCP, we were able to extend the behavior of the Shape hierarchy by adding a new Triangle class without modifying the existing Shape, Rectangle, or Circle classes. We achieved this by creating a new class that extends the abstract Shape class and implements its own calculateArea method.

This adherence to the OCP has several benefits:

1. # Maintainability: 

The existing code remains untouched, reducing the risk of introducing bugs or breaking functionality in the original classes.

2. # Extensibility: 

New shapes can be added without affecting the existing codebase, allowing for easy expansion of the system's behavior.

3. # Scalability: 

The codebase can grow with new shapes and behaviors without requiring extensive modifications, improving the system's scalability.

To leverage the OCP effectively, it is essential to design code with abstractions, interfaces, and inheritance hierarchies that allow for easy extension. By adhering to the OCP, we create more flexible and adaptable software systems.

Remember, the Open-Closed Principle encourages us to design classes and modules that are open for extension but closed for modification. By doing so, we enable code that is easier to maintain, extend, and test.