# With Applying ISP:

To apply the Interface Segregation Principle, we need to break down the Document interface into smaller, more focused interfaces that cater to specific sets of client requirements. In this case, we can create two interfaces: Readable and Printable.

```
interface Readable {
  read(): void;
}

interface Printable {
  print(): void;
}

```

Now, we can update the DocumentManager class to implement these smaller interfaces based on the needs of the clients.

```
class DocumentManager implements Readable, Printable {
  read(): void {
    // Implementation
  }

  print(): void {
    // Implementation
  }
}

```

By applying the Interface Segregation Principle, we have created smaller, more focused interfaces that clients can depend on. Clients that only require reading functionality can depend on the Readable interface, while clients that only need printing functionality can depend on the Printable interface. This approach provides a more flexible and maintainable design, as clients are not burdened with unnecessary dependencies on methods they don't need.

Applying ISP helps in reducing the coupling between classes/interfaces, promoting better code organization and modularity, and making the codebase more scalable and adaptable to changing requirements.
