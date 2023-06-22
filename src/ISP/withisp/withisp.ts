interface Readable {
    read(): void;
  }
  
  interface Printable {
    print(): void;
  }

  class DocumentManager implements Readable, Printable {
    read(): void {
      // Implementation
    }
  
    print(): void {
      // Implementation
    }
  }
  