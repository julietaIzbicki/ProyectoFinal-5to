import categoriasRepository from '../repositories/categorias-repository.js'

export default class CategoriasService{
    getCategorias= async () => {
        const repo = new categoriasRepository();
        const categoria = await repo.getCategorias();
        return categoria;
    }
}