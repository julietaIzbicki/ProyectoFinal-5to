import {Router} from 'express';
import { parse } from 'dotenv';
import jwt from 'jsonwebtoken';
import UsersService from '../services/users-service.js';
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
        const newUser = await svc.createAsync(user);
        return res.status(201).send('Usuario creado exitosamente.');
    } catch (error) {
        console.error('Error al crear usuario:', error);
        return res.status(500).send('Error interno del servidor.');
    }
});

/*
router.post('/likes', )
INSERT INTO public."Favoritos"("idUsuario", "idOfrecido")
	VALUES ( 16, 4);
	
DELETE FROM public."Favoritos" WHERE "idUsuario" = 16 AND "idOfrecido"=4
	

SELECT * FROM public."Favoritos" WHERE "idUsuario" = 16 AND "idOfrecido"=4

IF EXISTS(SELECT * FROM public."Favoritos" WHERE "idUsuario" = 16 AND "idOfrecido"=4) THEN
	DELETE FROM public."Favoritos" WHERE "idUsuario" = 16 AND "idOfrecido"=4
ELSE 	
INSERT INTO public."Favoritos"("idUsuario", "idOfrecido")
	VALUES ( 16, 4);
END IF	
*/


export default router;