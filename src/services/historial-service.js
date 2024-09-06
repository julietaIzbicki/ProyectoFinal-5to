import HistorialRepository from '../repositories/historial-repository.js';

export default class historialService {
    createHistorial = async (historial) => {
        const repo = new HistorialRepository();
        const newId = await repo.createAsync(historial); 
        return newId;
    }
}
