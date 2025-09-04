import { DataTypes } from "sequelize"; 
import sequelize from "../config/db.js";

const Conta = sequelize.define('conta', {
  id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field:'id_conta'},
  descricao_conta : {type: DataTypes.STRING, allowNull: false},
}, {
  tableName: 'contas',
  timestamps: false,
},
);

export default Conta;