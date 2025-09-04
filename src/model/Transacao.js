import { DataTypes } from "sequelize"; 
import sequelize from "../config/db.js";
import Fornecedor from "./Fornecedor.js";
import Subcategoria from "./Subcategoria.js";
import Conta from "./Conta.js";

const Transacao = sequelize.define('transacao', {
  id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field:'id_transacao'},
  data_transacao : {type: DataTypes.DATE, allowNull: false},
  valor : {type: DataTypes.FLOAT, allowNull: false},
}, {
  tableName: 'transacoes',
  timestamps: false,
});

Transacao.hasOne(Fornecedor, {as: "fornecedor", foreignKey: 'id'});
Transacao.hasOne(Subcategoria, {as: "subcategoria", foreignKey: 'id'});
Transacao.hasOne(Conta, {as: "conta", foreignKey: 'id'});


export default Transacao;   