import FavsRepository from '../repositories/favoritos-repository.js';

export default class FavsService {
    createAsync = async (idUsuario, idOfrecido) => {
        const repo = new FavsRepository();
        console.log("ID de usuario y ofrecido recibidos:", idUsuario, idOfrecido);
        const resultado = await repo.createAsync(idUsuario, idOfrecido);  
        return resultado;
    }
}
