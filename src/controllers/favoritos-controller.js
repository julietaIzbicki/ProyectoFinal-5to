import { Router } from 'express';
import AutenticationMddleware from './../middlewares/autentication-middleware.js';
import FavsService from '../services/favoritos-service.js';
const router = Router();
const svc = new FavsService();

router.patch('/likes/:id', AutenticationMddleware.AuthMiddleware, async (req, res) => {
    let respuesta;
    const idUsuario = req.id_user;
    const idOfrecido = req.params.id;
    console.log("ID de usuario y ofrecido:", idUsuario, idOfrecido);
    try {
        respuesta = await svc.createAsync(idUsuario, idOfrecido);
        return res.status(201).send('Likeado exitosamente.');
    } catch (error) {
        console.error('Error al likear:', error);
        return res.status(500).send('Error interno del servidor.');
    }
});

export default router;
