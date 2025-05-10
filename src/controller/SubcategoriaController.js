import SubcategoriaService from "../service/SubcategoriaService.js";
import GenericController from "./GenericController.js";

class SubcategoriaController extends GenericController {
    constructor(){
        super(new SubcategoriaService());
    }
}

export default SubcategoriaController;