import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

async function testConnection() {
    try {
      const con = await connection.getConnection();
      console.log('Conexão bem-sucedida!');
      con.release();
    } catch (err) {
      console.error('Erro ao conectar ao banco de dados:', err.message);
    }
}

connection.once("Aberto", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
});



export default {
    testConnection,
    query: connection.query.bind(connection)
};