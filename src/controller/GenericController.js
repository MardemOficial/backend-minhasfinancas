class GenericController {

    constructor(entityService){
        this.service = entityService;
    }

    async create(req, res){
        try{
            const object = await this.service.create(req, res);
            res.status(201).json(object);
        }catch (error){
            res.status(error.statusCode).json({ message: `${error.message}`});
        }
    }

    async update(req, res){
        try{
            await this.service.update(req, res);
            res.status(200).json({ message: `Atualizado com sucesso!`});
        }catch (error){
            res.status(error.statusCode).json({ message: `${error.message}`});
        }
    }

    async findByPk(req, res){
        try{
            const object = await this.service.findByPk(req, res);
            res.status(200).json(object);
        }catch(error){
            res.status(error.statusCode).json({ message: `${error.message}`});
        }
    }

    async getAll(req, res){
        try{
            const objects = await this.service.findAll();
            res.status(200).json(objects);
        }catch (error){
            res.status(error.statusCode).json({ message: `${error.message}`})
        }
    }

    async delete(req, res){
        try{
            await this.service.delete(req, res);
            res.status(200).json({ message: `Deletado com sucesso!`});
        }catch(error){
            res.status(error.statusCode).json({ message: `${error.message}`});
        }
    }

}

export default GenericController