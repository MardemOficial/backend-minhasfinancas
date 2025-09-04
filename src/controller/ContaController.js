import ContaService from '../service/ContaService.js';
import GenericController from './GenericController.js';

class ContaController extends GenericController{

  constructor(){
    super(new ContaService());
  };
}

export default ContaController;