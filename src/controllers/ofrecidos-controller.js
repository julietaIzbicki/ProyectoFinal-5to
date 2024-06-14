import {Router} from 'express';
import jwt from 'jsonwebtoken';
import OfrecidosService from '../services/ofrecidos-service.js';
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

export default router;