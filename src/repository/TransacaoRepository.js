import GenericRepository from "./GenericRepository.js";
import Transacao from "../model/Transacao.js";

class TransacaoRepository extends GenericRepository {
    constructor() {
        super(Transacao);
    }

};

export default TransacaoRepository;