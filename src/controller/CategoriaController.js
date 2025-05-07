import GenericController from "./GenericController.js";
import CategoriaService from "../service/CategoriaService.js";

class CategoriaController extends GenericController{

    constructor(){
        super(new CategoriaService());
    }
}

export default CategoriaController;