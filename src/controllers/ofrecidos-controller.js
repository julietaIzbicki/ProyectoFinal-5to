import {Router} from 'express';
import jwt from 'jsonwebtoken';
import OfrecidosService from '../services/ofrecidos-service.js';
const router = Router();
const svc = new OfrecidosService();

router.post('/filtros', async (req, res) => {
    let respuesta;
    let filtro = req.body;
    
    const usarInicio = await svc.getByFilter(filtro)
    if (usarInicio != null){
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

export default router;