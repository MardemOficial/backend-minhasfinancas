import { Sequelize, DataTypes } from "sequelize"; 
import sequelize from "../config/db.js";
import Categoria from "./Categoria.js";

const Subcategoria = sequelize.define('subcategoria', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field:'id_subcategoria'},
    descricao_subcategoria : {type: DataTypes.STRING, allowNull: false},
}, {
    tableName: 'subcategorias',
    timestamps: false
}
);

Subcategoria.hasOne(Categoria, { as: 'categoria', foreignKey: 'id'});

export default Subcategoria;