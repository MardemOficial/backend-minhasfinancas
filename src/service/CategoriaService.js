import CategoriaRepository from "../repository/CategoriaRepository.js";
import ApiException from "../exception/ApiContextError.js";

class CategoriaService {

    constructor() {
        this.categoriaRepository = new CategoriaRepository();
    }

    async create(req, res){
        const categoria = req.body;

        if (!categoria) {
            throw new ApiException("Categoria não informada!", 404);
        }

        if (!categoria.descricao_categoria) {
            throw new ApiException("Descrição da categoria não informado!", 404);
        }

        return await this.categoriaRepository.create(categoria);
    }

    async update(req, res){

        const id = req.params.id;
        const categoria = req.body;

        if (!categoria) {
            throw new ApiException("Categoria não informada!", 404);
        }

        if (!id) {
            throw new ApiException("ID da categoria não informado!", 404);
        }

        return await this.categoriaRepository.update(Number(id), categoria);
    }

    async findByPk(req, res){
        const id = req.params.id;

        if (!id) {
            throw new ApiException("ID da categoria não informado!", 404);
        }

        return await this.categoriaRepository.findByPk(Number(id));
    }

    async findAll(req, res){
        return await this.categoriaRepository.findAll();
    }

    async delete(req, res){
        const id = req.params.id;

        if (!id) {
            throw new ApiException("ID da categoria não informado!", 404);
        }

        return await this.categoriaRepository.delete(id);
    }
    
}

export default CategoriaService;