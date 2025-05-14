import express from "express";
import transacoes from "./transacoesRoutes.js";
import categorias from "./categoriaRoutes.js";
import subcategorias from "./subcategoriaRoutes.js";
import conta from "./contaRoutes.js";


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send({ title: "API de Transações", version: "1.0.0" }));
    
    app.use(express.json(), transacoes, categorias, subcategorias, conta);
}

export default routes;
