import TransacaoService from "../service/TransacaoService.js";   
import GenericController from "./GenericController.js";

class TransacaoController extends GenericController{

    constructor(){
        super(new TransacaoService());
    }

  /*  async createTransacao(req, res){
        try{
            const transacao = await this.service.createTransacao(req, res);
            res.status(201).json(transacao);
        }catch (error){
            res.status(error.status).json({ message: `${error.message} - falha ao criar a transação`});
        }
    }

    async updateTransacao(req, res){
        try{
            const transaco = await this.service.updateTransacao(req, res);
            res.status(200).json(transaco);
        }catch (error){
            res.status(error.status).json({ message: `${error.message} - falha ao atualizar a transação`});
        }
    }

    async getTranscao(req, res){
        try{
            const transacao = await this.service.findByPk(req, res);
            res.status(200).json(transacao);
        }catch(error){
            res.status(error.status).json({ message: `${error.message} - falha ao obter a transação`});
        }
    }

    async getAllTransacao(req, res){
        try{
            const transacoes = await this.service.findAllTransacoes();
            res.status(200).json(transacoes);
        }catch (error){
            res.status(error.status).json({ message: `${error.message} - falha ao obter a lista de transações`})
        }
    }

    async deleteTransacao(req, res){
        try{
            const transacao = await this.service.deleteTransacao(req, res);
            res.status(200).json(transacao);
        }catch(error){
            res.status(error.status).json({ message: `${error.message} - falha ao deletar a transação`});
        }
    }*/
}

export default TransacaoController;