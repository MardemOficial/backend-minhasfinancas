import TransacaoRepository from "../repository/TransacaoRepository.js";
import ApiException from "../exception/ApiContextError.js";


class TransacaoService{

    constructor() {
        this.repository = new TransacaoRepository();
    }

    async create(req, res) {

        const transacao = req.body;

        if (!transacao) {
            throw new ApiException("Transação não informada!", 400);
        }

        if(!transacao.data_transacao) {
            throw new ApiException("Data da transação não informada!", 400);
        }

        if(transacao.valor <= 0){
            throw new ApiException("Valor inválido!", 400);
        }

        if(!transacao.id_subcategoria) {
            throw new ApiException("Subcategoria não informada!", 400);
        }

        if(!transacao.id_fornecedor) {
            throw new ApiException("Fornecedor não informado!", 400);
        }

        if(!transacao.id_conta) {
            throw new ApiException("Conta não informada!", 400);
        }


        return await this.repository.create(transacao);
    }

    async update(req, res) {
        const transacao = req.body;
        const id = req.params.id;

        if (!transacao) {
            throw new ApiException("Transação não informada!", 400);
        }

        if (!id) {
            throw new ApiException("ID da transação não informado!", 400);
        }

        return await this.repository.update(transacao, id);
    }

    async findByPk(req, res) {
        const id = req.params.id;

        if (!id) {
            throw new ApiException("ID da transação não informado!", 400);
        }

        return await this.repository.findByPk(id);
    }

    async findAll(req, res) {
        try{
            
            let {page = 1, limit = 10} = req.query;
            
            page = parseInt(page);
            limit = parseInt(limit);

            if(page < 1 || limit < 1){
                throw new ApiException("Página ou limite inválido!", 400);
            }

            return await this.repository.findAll(req, res);

        }catch (error){
            console.error("Erro ao buscar todos os objetos: ", error);
        }
    }

    async delete(req, res){
        const id = req.params.id;

        if(!id){
            throw new ApiException("Id da transação não informado!", 400);
        }
    }

}

export default TransacaoService;