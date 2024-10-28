import OfrecidosRepository from '../repositories/ofrecidos-repository.js';

export default class OfrecidosService {
    getByFilter = async (filters) => {
        const repo = new OfrecidosRepository();
        const user = await repo.getByFilter(filters);
        return user;
    }

    getById = async (id) => {
        const repo = new OfrecidosRepository();
        const user = await repo.getById(id);
        return user;
    }

    createOfrecido = async (ofrecido) => {
        const repo = new OfrecidosRepository();
        const newId = await repo.createOfrecido(ofrecido);
        return newId;
    }
}