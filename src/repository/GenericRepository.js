import database from "../model/index.js";

class GenericRepository {

    constructor(model) {
        this.model = model;
    }

    async create(object) {
        database[this.model].create(object);
    }

    async update(id, objeto) {

        const listUpdates = await database[this.model].update(objeto, { where: {id}});

        if(listUpdates[0] === 0){
            throw new Error("Objeto não atualizado!");
        }

        return true;
    }

    async findByPk(id){

        const object = await database[this.model].findByPk(id);

        if(!object){
            throw new Error("Objeto não encontrado!");
        }

        return object;
    }

    async findAll(){
        try{
            console.log("Buscando todos os objetos do modelo: ", Object.keys(database));
            console.log("Modelo: ", database.models);
          //  return await database['models'][this.model].findAll();
        }catch (error){
            console.error("Erro ao buscar todos os objetos: ", error);
        }
    }

    async delete(id){
        return await database[this.model].destroy({ where: { id }});
    }

}

export default GenericRepository;