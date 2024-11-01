import HistorialRepository from '../repositories/historial-repository.js';

export default class HistorialService {
  createHistorial = async (historial) => {
    const repo = new HistorialRepository();
    const resultado = await repo.createAsync(historial); 
    return resultado;
  };
  
    postResena = async (nuevaResena) => {
        const repo = new HistorialRepository();
        const resultado = await repo.postResena(nuevaResena); 
        return resultado;
    };
      
    getHistorialPorFecha = async (fecha) => {
        const repo = new HistorialRepository();
        const historiales = await repo.getByFecha(fecha);
        return historiales;
      };
      
    
}