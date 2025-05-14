import FornecedorRepository from "../repository/FornecedorRepository.js";
import ApiException from "../exception/ApiContextError.js";

class FornecedorService {
    constructor() {
        this.fornecedorRepository = new FornecedorRepository();
    }

    async create(req, res){

        const fornecedor = req.body;

        if (!fornecedor) {
            throw new ApiException("Fornecedor não informado!", 400);
        }

        if (!fornecedor.descricao_fornecedor) {
            throw new ApiException("Descrição do fornecedor não informado!", 400);
        }

        return await this.fornecedorRepository.create(fornecedor);
    }

    async update(req, res){

        const id = req.params.id;
        const fornecedor = req.body;

        if (!fornecedor) {
            throw new ApiException("Fornecedor para atualizar não informado!", 400);
        }

        if (!id) {
            throw new ApiException("ID do fornecedor não informado!", 400);
        }

        return await this.fornecedorRepository.update(Number(id), fornecedor);
    }

    async findByPk(req, res){
        const id = req.params.id;

        if (!id) {
            throw new ApiException("ID do fornecedor não informado!", 400);
        }

        return await this.fornecedorRepository.findByPk(Number(id));
    }

    async findAll(req, res){

        try{
            
            let {page = 1, limit = 10} = req.query;
            
            page = parseInt(page);
            limit = parseInt(limit);

            if(page < 1 || limit < 1){
                throw new ApiException("Página ou limite inválido!", 400);
            }

            return await this.fornecedorRepository.findAll(req, res);

        }catch (error){
            console.error("Erro ao buscar todos os objetos: ", error);
        }
    }

    async delete(req, res){
        
        const id = req.params.id;

        if (!id) {
            throw new ApiException("ID do fornecedor não informado!", 400);
        }

        return await this.fornecedorRepository.delete(Number(id));
    }
};

export default FornecedorService;