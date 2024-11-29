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

    // Validaciones básicas
    if (!user.nombre || !user.apellido) {
        return res.status(400).send('Los campos nombre y apellido son obligatorios.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
        return res.status(400).send('El email no es válido.');
    }
    if (user.contrasena.length < 6) {
        return res.status(400).send('La contraseña debe tener al menos 6 caracteres.');
    }

    try {
        const existeUsuario = await svc.getByEmailAsync(user.email); // Nueva función del servicio
        if (existeUsuario) {
            return res.status(409).send('El usuario ya existe.');
        }

        const respuesta = await svc.createAsync(user);
        if (respuesta >= 0) {
            const usarInicio = await svc.getByUsernameAsync({ email: user.email, contrasena: user.contrasena });
            if (usarInicio) {
                const options = { expiresIn: '1h', issuer: 'ort' };
                const token = jwt.sign(usarInicio, claveSecreta, options);

                return res.status(201).json({
                    success: true,
                    message: 'Usuario creado e iniciado sesión exitosamente.',
                    token: token,
                });
            } else {
                return res.status(500).send('Error al iniciar sesión después del registro.');
            }
        } else {
            return res.status(500).send('No se pudo registrar el usuario.');
        }
    } catch (error) {
        console.error('Error al crear usuario:', error);
        return res.status(500).send('Error interno del servidor.');
    }
});

router.get('/profile', AutenticationMiddleware.AuthMiddleware,
async (req, res) => {
    try {
        const userEmail = req.email; 
        console.log(userEmail);
        if (!userEmail) {
            return res.status(400).json({ success: false, message: 'Email no encontrado en el token.' });
        }

        const profile = await svc.getProfileAsync(userEmail);
        if (profile) {
            return res.status(200).json(profile);
        } else {
            return res.status(404).json({ success: false, message: "Perfil no encontrado" });
        }
    } catch (error) {
        console.error('Error al obtener perfil:', error);
        return res.status(500).json({ success: false, message: "Error interno del servidor" });
    }
});

export default router;