import express from "express";
import database from "./dao/db.js";

const app = express();

app.use(express.json());

const filmes = [
    { id: 10, titulo: "007"},
    { id: 30, titulo: "Vingadores"}
];

app.get("/", async (req, res) => {
    try{
        await database.testConnection();

        const[rows] = await database.query("SELECT * FROM categoria");
        res.status(200).json(rows);
    }catch(err){
        console.error("Erro ao conectar ao banco de dados:", err.message);
        res.status(500).send("Erro ao conectar ao banco de dados.");
    }
 
});

app.get("/filmes", (req, res) => {
    res.status(200).json(filmes)
});

app.get("/filmes/:id", (req, res) => {
    const filme = filmes.find(f => f.id == req.params.id);

    if(!filme){
        res.status(404).send("Filme não encontrado!");
    }else{
        res.status(200).json(filme);
    }

});

app.post("/filmes", (req, res) => {
    filmes.push(req.body);
    res.status(201).send("Filme adicionado com sucesso!");
    console.log(filmes);
});

app.put("/filmes/:id", (req, res) => {
    filmes.forEach((f, i) => {
        if(f.id == req.params.id){
            filmes[i] = req.body;
        }
    });
    res.status(200).json(filme);
});

app.delete("/filmes/:id", (req, res) => {
    filmes.splice(filmes.findIndex(f => f.id == req.params.id), 1);
    res.status(200).send("Filme removido com sucesso!");
});

export default app;