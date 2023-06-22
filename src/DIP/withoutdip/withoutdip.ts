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
  