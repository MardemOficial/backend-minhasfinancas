import mysql from "mysql2/promise";


const transacoo = new mysql.Schema({
    id_transacao : {type: Number, required: true},
    data_transacao : {type: Date, required: true},
    valor : {type: Number, required: true},
    id_subcategoria : {type: Number, required: true},
    id_fornecedor : {type: Number, required: true},
    id_conta : {type: Number, required: true}
})