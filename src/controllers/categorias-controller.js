import { Router } from 'express';
import CategoriasService from '../services/categorias-service.js';

const router = Router();
const svc = new CategoriasService();

router.get('/', async (req, res) => {  
    try {
        const categorias = await svc.getCategorias();
        if (categorias) {
            return res.status(200).json(categorias);
        } else {
            return res.status(401).send("NoOk");
        }
    } catch (error) {
        console.error('Error al obtener categorías:', error);
        return res.status(500).send("Error interno del servidor");
    }
});

export default router;
