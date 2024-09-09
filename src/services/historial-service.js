import HistorialRepository from '../repositories/historial-repository.js';

export default class HistorialService {
    createHistorial = async (historial) => {
        const repo = new HistorialRepository();
        const resultado = await repo.createAsync(historial); 
        return resultado;
    }
}