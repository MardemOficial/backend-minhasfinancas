import Conta from "../model/Conta.js";
import GenericRepository from "./GenericRepository.js";

class ContaRepository extends GenericRepository{

  constructor(){
    super(Conta);
  }
};

export default ContaRepository;