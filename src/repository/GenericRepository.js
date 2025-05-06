//import database from "../model/index.js";
import database from "../config/db.js"

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
            throw new Error("Objeto não atualizado!");
        }

        return true;
    }

    async findByPk(id){

        const object = await database.models[this.model.name].findByPk(id);

        if(!object){
            throw new Error("Objeto não encontrado!");
        }

        return object;
    }

    async findAll(){
        try{
            return await database.models[this.model.name].findAll();
        }catch (error){
            console.error("Erro ao buscar todos os objetos: ", error);
        }
    }

    async delete(id){
        return await database.models[this.model.name].destroy({ where: { id }});
    }

}

export default GenericRepository;