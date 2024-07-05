import FavsRepository from '../repositories/favoritos-repository.js';

export default class FavsService {
    createAsync = async (idUsuario, idOfrecido) => {
        const repo = new FavsRepository();
        const resultado = await repo.createAsync(idUsuario, idOfrecido);  
        return resultado;
    }
}
