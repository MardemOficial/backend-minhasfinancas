import CategoriaRepository from "../repository/CategoriaRepository.js";
import ApiException from "../exception/ApiContextError.js";

class CategoriaService {

    constructor() {
        this.categoriaRepository = new CategoriaRepository();
    }

    async create(req, res){
        const categoria = req.body;

        if (!categoria) {
            throw new ApiException("Categoria não informada!", 400);
        }

        if (!categoria.descricao_categoria) {
            throw new ApiException("Descrição da categoria não informado!", 400);
        }

        return await this.categoriaRepository.create(categoria);
    }

    async update(req, res){

        const id = req.params.id;
        const categoria = req.body;

        if (!categoria) {
            throw new ApiException("Categoria não informada!", 400);
        }

        if (!id) {
            throw new ApiException("ID da categoria não informado!", 400);
        }

        return await this.categoriaRepository.update(Number(id), categoria);
    }

    async findByPk(req, res){
        const id = req.params.id;

        if (!id) {
            throw new ApiException("ID da categoria não informado!", 400);
        }

        return await this.categoriaRepository.findByPk(Number(id));
    }

    async findAll(req, res){
        try{
            
            let {page = 1, limit = 10} = req.query;
            
            page = parseInt(page);
            limit = parseInt(limit);

            if(page < 1 || limit < 1){
                throw new ApiException("Página ou limite inválido!", 400);
            }

            return await this.categoriaRepository.findAll(req, res);

        }catch (error){
            console.error("Erro ao buscar todos os objetos: ", error);
        }
    }

    async delete(req, res){
        const id = req.params.id;

        if (!id) {
            throw new ApiException("ID da categoria não informado!", 400);
        }

        return await this.categoriaRepository.delete(id);
    }
    
}

export default CategoriaService;