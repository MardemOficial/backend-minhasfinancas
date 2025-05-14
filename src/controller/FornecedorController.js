import GenericController from "./GenericController.js";
import FornecedorService from "../service/FornecedorService.js";

class FornecedorController extends GenericController {
    constructor() {
        super(new FornecedorService());
    }
};

export default FornecedorController;