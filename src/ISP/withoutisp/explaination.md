# The Interface Segregation Principle: 

 ISP is a principle of object-oriented design that suggests that clients should not be forced to depend on interfaces they do not use. It promotes the idea of designing small, cohesive interfaces that are specific to the needs of the clients, rather than creating large, general-purpose interfaces.

# Without Applying ISP:

Let's consider an example where we have a TypeScript codebase for a document management system. We have an interface called Document that includes various methods related to document management, such as create, read, update, delete, and print. Additionally, we have a class called DocumentManager that implements the Document interface and provides implementations for all those methods.

```
interface Document {
  create(): void;
  read(): void;
  update(): void;
  delete(): void;
  print(): void;
}

class DocumentManager implements Document {
  create(): void {
    // Implementation
  }

  read(): void {
    // Implementation
  }

  update(): void {
    // Implementation
  }

  delete(): void {
    // Implementation
  }

  print(): void {
    // Implementation
  }
}

```

The problem with this design is that not all clients of the Document interface may require all the methods. For example, some clients may only need to read documents and print them, while others may only need to create and update documents. However, they are forced to depend on the entire Document interface, which includes methods they don't need.