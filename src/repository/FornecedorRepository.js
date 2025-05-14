import GenericRepository from "./GenericRepository.js";
import Fornecedor from "../model/Fornecedor.js";

class FornecedorRepository extends GenericRepository{
    constructor(){
        super(Fornecedor);
    }
};

export default FornecedorRepository;