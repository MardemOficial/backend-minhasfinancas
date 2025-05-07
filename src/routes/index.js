import express from "express";
import transacoes from "./transacoesRoutes.js";
import categorias from "./categoriaRoutes.js";


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send({ title: "API de Transações", version: "1.0.0" }));
    
    app.use(express.json(), transacoes, categorias);
}

export default routes;
