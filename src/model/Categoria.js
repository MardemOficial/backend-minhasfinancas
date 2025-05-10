import { Sequelize, DataTypes } from "sequelize"; 
import sequelize from "../config/db.js";

const Categoria = sequelize.define('categoria', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field:'id_categoria'},
    descricao_categoria : {type: DataTypes.STRING, allowNull: false},
}, {
    tableName: 'categorias',
    timestamps: false
}
);


export default Categoria;