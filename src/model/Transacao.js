import { Sequelize, DataTypes } from "sequelize"; 
import sequelize from "../config/db.js";

const Transacao = sequelize.define('Transacao', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field:'id_transacao'},
    data_transacao : {type: DataTypes.DATE, allowNull: false},
    valor : {type: DataTypes.FLOAT, allowNull: false},
    id_subcategoria : {type: DataTypes.INTEGER, allowNull: false},
    id_fornecedor : {type: DataTypes.INTEGER, allowNull: false},
    id_conta : {type: DataTypes.INTEGER, allowNull: false}
}, {
    tableName: 'transacoes',
    timestamps: false
}

);

export default Transacao;   