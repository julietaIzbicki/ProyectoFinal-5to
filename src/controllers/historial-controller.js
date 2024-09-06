import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import AutenticationMiddleware from '../middlewares/autentication-middleware.js';
import historialService from '../services/historial-service.js';

const router = Router();
const svc = new historialService();

router.post('/historial', AutenticationMiddleware.AuthMiddleware,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const nuevoId = await svc.createHistorial(nuevoHistorial);
            if (nuevoId) {
                res.status(201).json({ id: nuevoId });
            } else {
                res.status(400).send('Error al insertar el ofrecido');
            }
        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
);

export default router;
