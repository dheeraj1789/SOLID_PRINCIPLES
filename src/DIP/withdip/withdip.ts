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
  