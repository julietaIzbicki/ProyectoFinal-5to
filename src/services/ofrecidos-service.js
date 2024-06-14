import OfrecidosRepository from '../repositories/ofrecidos-repository.js';

export default class OfrecidosService {
    getByFilter = async (filters) => {
        const repo = new OfrecidosRepository();
        const user = await repo.getByFilter(filters);
        return user;
    }
}