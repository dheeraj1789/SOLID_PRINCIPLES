# With Applying DIP:

To apply the Dependency Inversion Principle, we introduce an abstraction, such as an interface, to decouple the high-level module (NotificationService) from the low-level module (EmailSender). This abstraction will be implemented by the low-level module.

```
interface MessageSender {
  sendMessage(message: string): void;
}

class EmailSender implements MessageSender {
  sendEmail(message: string): void {
    // Implementation to send email
  }
}

class NotificationService {
  private messageSender: MessageSender;

  constructor(messageSender: MessageSender) {
    this.messageSender = messageSender;
  }

  sendNotification(message: string): void {
    this.messageSender.sendMessage(message);
  }
}

```

In this updated code, we introduce the "MessageSender" interface that defines a contract for sending messages. The EmailSender class implements this interface and provides an implementation for sending emails. The NotificationService class now depends on the MessageSender interface instead of the concrete EmailSender class.

By applying the Dependency Inversion Principle, we have inverted the dependency relationship. The high-level NotificationService module now depends on an abstraction (MessageSender) instead of a concrete low-level module (EmailSender). This decoupling allows us to easily extend or replace the message sending mechanism by providing different implementations of the MessageSender interface (e.g., SMSSender, PushNotificationSender) without modifying the NotificationService class.

Applying DIP promotes code reusability, testability, and modular design. It allows for easier integration of new features or changes without impacting existing code. Additionally, it encourages the use of abstractions, which can lead to more flexible and maintainable codebases.