class GenericController {

    constructor(entityService){
        this.service = entityService;
    }

    async create(req, res){
        try{
            const object = await this.service.createTransacao(req, res);
            res.status(201).json(object);
        }catch (error){
            res.status(error.status).json({ message: `${error.message} - falha ao criar o objeto!`});
        }
    }

    async update(req, res){
        try{
            const object = await this.service.updateTransacao(req, res);
            res.status(200).json(object);
        }catch (error){
            res.status(error.status).json({ message: `${error.message} - falha ao atualizar o objeto!`});
        }
    }

    async getByPk(req, res){
        try{
            const object = await this.service.findByPk(req, res);
            res.status(200).json(object);
        }catch(error){
            res.status(error.status).json({ message: `${error.message} - falha ao obter o objeto!`});
        }
    }

    async getAll(req, res){
        try{
            const objects = await this.service.findAll();
            res.status(200).json(objects);
        }catch (error){
            res.status(error.status).json({ message: `${error.message} - falha ao obter a lista de objetos!`})
        }
    }

    async delete(req, res){
        try{
            const object = await this.service.delete(req, res);
            res.status(200).json(object);
        }catch(error){
            res.status(error.status).json({ message: `${error.message} - falha ao deletar o objeto!`});
        }
    }

}

export default GenericController