import OfrecidosRepository from '../repositories/ofrecidos-repository.js';

export default class OfrecidosService {
    getByFilter = async (entity) => {
        const repo = new OfrecidosRepository();
        const user = await repo.getByFilter(entity);
        return user;
    }
}