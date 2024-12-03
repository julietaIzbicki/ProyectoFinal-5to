import {Router} from 'express';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import OfrecidosService from '../services/ofrecidos-service.js';
import AutenticationMiddleware from '../middlewares/autentication-middleware.js';
const router = Router();
const svc = new OfrecidosService();

router.get('/filtros', async (req, res) => {
    let respuesta;
    const filtros = req.query;
    const usarInicio = await svc.getByFilter(filtros)
    if (usarInicio != null){
        respuesta = res.status(200).json(usarInicio);
    } else {
        respuesta = res.status(401).send("NoOk");
    }
    return respuesta;
});

router.get('/id/:id', async (req, res) => {
    let respuesta;
    let id = req.params;
    const getId = await svc.getById(id)
    if (getId != null){
        respuesta = res.status(200).json(getId);
    } else {
        respuesta = res.status(401).send("NoOk");
    }
    return respuesta;
})

router.post('/ofrecidos',
    AutenticationMiddleware.AuthMiddleware, 

    body('titulo').isString().withMessage('Titulo es requerida y debe ser una cadena de texto.'),
    body('descripcion').isString().withMessage('Descripción es requerida y debe ser una cadena de texto.'),
    body('precio').isNumeric().withMessage('Precio es requerido y debe ser un número.'),
    body('idcategoria').isNumeric().withMessage('ID de categoría es requerido y debe ser un número.'),
    body('tags').optional().isString().withMessage('Tags debe ser una cadena de texto.'),

    async (req, res) => {
        let nuevoId = -1;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const nuevoOfrecido = req.body;
            nuevoOfrecido.idusuario = req.id_user; 
            nuevoId = await svc.createOfrecido(nuevoOfrecido);
            if (nuevoId) {
                res.status(201).json({ id: nuevoId });
            } else {
                res.status(400).send('Error al insertar el ofrecido');
            }
        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
            res.status(500).send('Error interno del servidor');
        }
        return nuevoId;
    }
);

export default router;