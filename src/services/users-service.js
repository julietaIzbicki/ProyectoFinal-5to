import UsersRepository from '../repositories/users-repository.js';
import nodemailer from 'nodemailer';


export default class UsersService {
    getByUsernameAsync = async (entity) => {
        const repo = new UsersRepository();
        const user = await repo.getByUsernameAsync(entity);
        return user;
    }
    
    createAsync = async (entity) => {
        const repo = new UsersRepository();
        const user = await repo.createAsync(entity);
        return user;
    }

    generateVerificationCode = () => {
        return Math.floor(100000 + Math.random() * 900000).toString(); 
    }

    sendVerificationCodeEmail = async (email, code) => {
        const mailOptions = {
            to: email,
            from: process.env.EMAIL_USER,
            subject: 'Código de Verificación para Restablecer Contraseña',
            text: `Tu código de verificación es: ${code}. Este código es válido por 1 hora.`,
        };

        await this.transporter.sendMail(mailOptions);
    }

    constructor() {
        this.repo = new UsersRepository();
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }
    requestPasswordReset = async (email) => {
        const code = this.generateVerificationCode();
        const expiration = Date.now() + 3600000; // 1 hora de validez
        await this.repo.savePasswordResetCode(email, code, expiration);
        await this.sendVerificationCodeEmail(email, code);
    }

    verifyCode = async (email, code) => {
        const storedCode = await this.repo.getPasswordResetCode(email);
        if (!storedCode || storedCode.code !== code || storedCode.expiration < Date.now()) {
            throw new Error('Código inválido o expirado');
        }
    }

    resetPassword = async (email, newPassword) => {
        await this.repo.updatePassword(email, newPassword);
        await this.repo.deletePasswordResetCode(email);
    }
}