import UsersRepository from '../repositories/users-repository.js';
import dotenv from 'dotenv';
dotenv.config();

export default class UsersService {
    getByUsernameAsync = async (entity) => {
        const repo = new UsersRepository();
        const user = await repo.getByUsernameAsync(entity);
        return user;
    }
    
    createAsync = async (entity) => {
        const repo = new UsersRepository();
        const user = await repo.createAsync(entity);
        console.log(user, "svc")
        return user;
    }
}