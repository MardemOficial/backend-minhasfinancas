import GenericRepository from './GenericRepository.js';
import Subcategoria from "../model/Subcategoria.js";

class SubcategoriaRepository extends GenericRepository {

  constructor() {
    super(Subcategoria);
  }

};

export default SubcategoriaRepository;