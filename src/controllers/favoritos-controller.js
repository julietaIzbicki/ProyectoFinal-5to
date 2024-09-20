import { Router } from 'express';
import AutenticationMddleware from './../middlewares/autentication-middleware.js';
import FavsService from '../services/favoritos-service.js';
const router = Router();
const svc = new FavsService();

router.patch('/likes/:id', AutenticationMddleware.AuthMiddleware, async (req, res) => {
    let respuesta;
    const idUsuario = req.id_user;
    const idOfrecido = req.params.id;
    try {
        respuesta = await svc.createAsync(idUsuario, idOfrecido);
        if (respuesta >= 0) {
            return res.status(201).send('Likeado exitosamente.');
        } else {
            return res.status(201).send('Deslikeado exitosamente.');
        }
    } catch (error) {
        console.error('Error al likear:', error);
        return res.status(500).send('Error interno del servidor.');
    }
});

router.get('/favoritos', AutenticationMddleware.AuthMiddleware, async (req, res) => {
    const idUsuario = req.id_user; 
    let respuesta;
    try {
        respuesta = await svc.getFavoritosAsync(idUsuario);
        if (respuesta.length > 0) {
            return res.status(200).json(respuesta);
        } else {
            return res.status(404).send('No se encontraron favoritos.');
        }
    } catch (error) {
        console.error('Error al obtener favoritos:', error);
        return res.status(500).send('Error interno del servidor.');
    }
});

export default router;
