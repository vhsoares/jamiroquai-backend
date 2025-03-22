import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { EmailInterface } from "./notification-methods/mail.interface";
import { render } from "@react-email/components";
import EmailLoginRecorrente from "emails/login-recorrente";

const ORIGIN_EMAIL = "Vitor Soares <testei@gmail.com>"

@Injectable()
export class NotificationService {
    constructor(private readonly mailerService: MailerService) { }

    notifyMail = async (email: EmailInterface) => {  
        this.mailerService.sendMail({
            from: ORIGIN_EMAIL,
            to: email.destination,
            subject: email.subject,
            text: email.text,
            html: email.html
        })
    }
}