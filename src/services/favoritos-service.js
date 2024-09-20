import FavsRepository from '../repositories/favoritos-repository.js';

export default class FavsService {
    createAsync = async (idUsuario, idOfrecido) => {
        const repo = new FavsRepository();
        const resultado = await repo.createAsync(idUsuario, idOfrecido);  
        return resultado;
    }

    getFavoritosAsync = async (idUsuario, idOfrecido) => {
        const repo = new FavsRepository();
        const favoritos = await repo.getFavoritosAsync(idUsuario, idOfrecido);
        return favoritos;
    }
}
