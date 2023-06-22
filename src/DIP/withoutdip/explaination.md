# The Dependency Inversion Principle:

DIP is a principle of object-oriented design that suggests that high-level modules should not depend on low-level modules; both should depend on abstractions. It promotes decoupling between modules and facilitates flexibility, extensibility, and maintainability in codebases.

Without Applying DIP:
Let's consider an example where we have a TypeScript codebase for a messaging system. We have two classes: EmailSender and NotificationService. The NotificationService depends directly on the EmailSender class to send notifications via email.

```
class EmailSender {
  sendEmail(message: string): void {
    // Implementation to send email
  }
}

class NotificationService {
  private emailSender: EmailSender;

  constructor() {
    this.emailSender = new EmailSender();
  }

  sendNotification(message: string): void {
    this.emailSender.sendEmail(message);
  }
}

```

In this example, the NotificationService class depends directly on the EmailSender class, creating a tight coupling between them. If we decide to change the notification mechanism or add support for other channels (e.g., SMS, push notifications), we would need to modify the NotificationService class, violating the principle of open-closed principle.
