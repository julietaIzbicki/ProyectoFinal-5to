import { Router } from 'express';
import AutenticationMiddleware from '../middlewares/autentication-middleware.js';
import historialService from '../services/historial-service.js';

const router = Router();
const svc = new historialService();

router.post('/historial', 
    AutenticationMiddleware.AuthMiddleware,
    async (req, res) => {
        const nuevoHistorial = {
            idPublicacion: req.body.idPublicacion, 
            idProveedor: req.body.idProveedor, 
            idContratador: req.id_user, 
            fechaReservada: req.body.fechaReservada, 
            idEstado: req.body.idEstado 
        };

        try {
            const resultado = await svc.createHistorial(nuevoHistorial);
            if (resultado === 1) {
                res.status(201).json({ message: 'Historial creado exitosamente' });
            } else if (resultado === -1) {
                res.status(400).json({ message: 'La reserva ya existe' });
            } else {
                res.status(400).json({ message: 'Error al intentar crear el historial' });
            }
        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
);

export default router;