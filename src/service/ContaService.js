import ContaRepository from "../repository/ContaRepository.js";
import ApiException from "../exception/ApiContextError.js";

class ContaService {

  constructor(){
    this.contaRepository = new ContaRepository();
  };

  async create(req, res){
    const conta = req.body;

    if (!conta) {
      throw new ApiException("Conta não informada!", 400);
    }

    if (!conta.descricao_conta) {
      throw new ApiException("Descrição da conta não informada!", 400);
    }

    return await this.contaRepository.create(conta);
  };

  async update(req, res){
    const id = req.params.id;
    const conta = req.body;

    if (!conta) {
      throw new ApiException("Conta não informada!", 400);
    }

    if (!id) {
      throw new ApiException("ID da conta não informado!", 400);
    }

    return await this.contaRepository.update(Number(id), conta);
  };

  async findByPk(req, res){
    const id = req.params.id;

    if (!id) {
      throw new ApiException("ID da conta não informado!", 400);
    }

    return await this.contaRepository.findByPk(Number(id));
  };

  async findAll(req, res){
    try{
      let {page = 1, limit = 10} = req.query;
            
      page = parseInt(page);
      limit = parseInt(limit);

      if(page < 1 || limit < 1){
        throw new ApiException("Página ou limite inválido!", 400);
      }

      return await this.contaRepository.findAll(req, res);

    }catch (error){
      console.error("Erro ao buscar todos os objetos: ", error);
    }
  };

  async delete(req, res){
    const id = req.params.id;

    if (!id) {
      throw new ApiException("ID da conta não informado!", 400);
    }

    return await this.contaRepository.delete(Number(id));
  };
};

export default ContaService;