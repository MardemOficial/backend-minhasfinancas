import TransacaoService from "../service/TransacaoService.js";   
import GenericController from "./GenericController.js";

class TransacaoController extends GenericController{

  constructor(){
    super(new TransacaoService());
  }
}

export default TransacaoController;