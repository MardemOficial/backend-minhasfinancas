import { DataTypes } from "sequelize"; 
import sequelize from "../config/db.js";

const Fornecedor = sequelize.define('fornecedor', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field:'id_fornecedor'},
    descricao_fornecedor : {type: DataTypes.STRING, allowNull: false},
}, {
    tableName: 'fornecedores',
    timestamps: false
}
);

export default Fornecedor;