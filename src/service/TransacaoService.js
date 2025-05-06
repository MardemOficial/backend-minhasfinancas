import TransacaoRepository from "../repository/TransacaoRepository.js";

class TransacaoService{

    constructor() {
        this.repository = new TransacaoRepository();
    }

    async create(req, res) {

        const transacao = req.body;

        if (!transacao) {
            throw new Error("Transação não informada!", 404);
        }

        if(!transacao.data_transacao) {
            throw new Error("Data da transação não informada!", 404);
        }

        if(transacao.valor <= 0){
            throw new Error("Valor inválido!", 404);
        }

        if(!transacao.id_subcategoria) {
            throw new Error("Subcategoria não informada!", 404);
        }

        if(!transacao.id_fornecedor) {
            throw new Error("Fornecedor não informado!", 404);
        }

        if(!transacao.id_conta) {
            throw new Error("Conta não informada!", 404);
        }


        return await this.repository.create(transacao);
    }

    async update(req, res) {
        const transacao = req.body;
        const id = req.params.id;

        if (!transacao) {
            throw new Error("Transação não informada!", 404);
        }

        if (!id) {
            throw new Error("ID da transação não informado!", 404);
        }

        return await this.repository.update(transacao, id);
    }

    async getByPk(req, res) {
        const id = req.params.id;

        if (!id) {
            throw new Error("ID da transação não informado!", 404);
        }

        return await this.repository.findByPk(id);
    }

    async findAll() {
        return await this.repository.findAll();
    }

    async delete(req, res){
        const id = req.params.id;

        if(!id){
            throw new Error("Id da transação não informado!", 400);
        }
    }

}

export default TransacaoService;