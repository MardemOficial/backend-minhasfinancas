import SubcategoriaRepository from "../repository/SubcategoriaRepository.js";

class SubcategoriaService {

    constructor() {
        this.subcategoriaRepository = new SubcategoriaRepository();
    }

    async create(req, res) {

        const subcategoria = req.body;

        if(!subcategoria) {
            throw new ApiException("Subcategoria não informada!", 400);
        }

        if(!subcategoria.descricao_subcategoria) {
            throw new ApiException("Descrição da subcategoria não informada!", 400);
        }

        if(!subcategoria.id_categoria) {
            throw new ApiException("ID da categoria não informada!", 400);
        }

        return await this.subcategoriaRepository.create(subcategoria);
    }

    async update(req, res) {

        const id = req.params.id;
        const subcategoria = req.body;

        if(!subcategoria){
            throw new ApiException("Subcategoria não informada!", 400);
        }

        if(!id) {
            throw new ApiException("ID da subcategoria não informado!", 400);
        }

        return await this.subcategoriaRepository.update(Number(id), subcategoria);
    }

    async findByPk(req, res) {
        const id = req.params.id;

        return await this.subcategoriaRepository.findByPk(Number(id));
    }

    async findAll() {
        return await this.subcategoriaRepository.findAll();
    }

    async delete(req, res) {
        const id = req.params.id;

        return await this.subcategoriaRepository.delete(Number(id));
    }
}

export default SubcategoriaService;