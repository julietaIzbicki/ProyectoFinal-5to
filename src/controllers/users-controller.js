import {Router} from 'express';
import { parse } from 'dotenv';
import jwt from 'jsonwebtoken';
import UsersService from '../services/users-service.js';
import AutenticationMiddleware from '../middlewares/autentication-middleware.js';
const router = Router();
const svc = new UsersService();

const claveSecreta = "MaiuJuli_0607"

router.post('/login', async (req, res) => {
    let respuesta;
    let user = req.body;
    
    const usarInicio = await svc.getByUsernameAsync(user)
    if (usarInicio != null){
        const options = {
            expiresIn: '1h',
            issuer: 'ort'
        }
        const token = jwt.sign(usarInicio, claveSecreta, options)
        let ok = {
            success : true,
            mensagge : "El usuario existe",
            token : token

        }
        respuesta = res.status(200).json(ok);
    } else {
        let NoOk = {
            success : false,
            mensagge : "Usuario o clave invalida",
            token : null
        }
        respuesta = res.status(401).send(NoOk);
    }
    return respuesta;
});

router.post('/register', async (req, res) => {
    let user = req.body;
    if (!user.nombre || !user.apellido) {
        return res.status(400).send('Los campos nombre y apellido son obligatorios.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
        return res.status(400).send('El email no es válido.');
    }
    if (user.contrasena.length < 3) {
        return res.status(400).send('La contrasena debe tener al menos 6 caracteres.');
    }
    try {
        const respuesta = await svc.createAsync(user);
        if (respuesta >= 0) {
            return res.status(201).send('Usuario creado exitosamente.');
        }else{
            return res.status(201).send('El usuario ya existe.');
        }
    } catch (error) {
        console.error('Error al crear usuario:', error);
        return res.status(500).send('Error interno del servidor.');
    }
});

/*
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).send('El campo email es obligatorio.');
    }

    try {
        await svc.requestPasswordReset(email);
        return res.status(200).send('Se ha enviado un correo con el código de verificación.');
    } catch (error) {
        console.error('Error al solicitar el código de verificación:', error);
        return res.status(500).send('Error al procesar la solicitud.');
    }
});

router.post('/reset-password', async (req, res) => {
    const { email, code, newPassword } = req.body;
    if (!email || !code || !newPassword) {
        return res.status(400).send('El email, el código y la nueva contraseña son obligatorios.');
    }

    try {
        await svc.verifyCode(email, code);
        await svc.resetPassword(email, newPassword);
        return res.status(200).send('Contraseña restablecida con éxito.');
    } catch (error) {
        console.error('Error al restablecer la contraseña:', error);
        return res.status(400).send('Código inválido o expirado.');
    }
});

router.get('/protected-route', AutenticationMiddleware.AuthMiddleware, (req, res) => {
    res.send(`Ruta protegida. ID del usuario: ${req.id_user}`);
});
*/

export default router;