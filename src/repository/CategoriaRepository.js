import GenericRepository from "./GenericRepository.js";
import Categoria from "../model/Categoria.js";

class CategoriaRepository extends GenericRepository{
    constructor(){
        super(Categoria);
    }
};

export default CategoriaRepository;