//import database from "../model/index.js";
import database from "../config/db.js"
import ApiException from "../exception/ApiContextError.js";

class GenericRepository {

    constructor(model) {
        this.model = model;
    }

    async create(object) {
        database.models[this.model.name].create(object);
    }

    async update(id, objeto) {

        const listUpdates = await database.models[this.model.name].update(objeto, { where: {id}});

        if(listUpdates[0] === 0){
            throw new ApiException("Objeto não atualizado!", 400);
        }

        return true;
    }

    async findByPk(id){

        const object = await database.models[this.model.name].findByPk(id,{ include: {all: true}});

        if(!object){
            throw new ApiException("Objeto não encontrado!", 400);
        }

        return object;
    }

    async findAll(){
        try{
            return await database.models[this.model.name].findAll({include: {all: true}, limit: 50});
        }catch (error){
            console.error("Erro ao buscar todos os objetos: ", error);
        }
    }

    async delete(id){
        return await database.models[this.model.name].destroy({ where: { id }});
    }

}

export default GenericRepository;