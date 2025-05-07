import express from "express";
import TransacaoController from "../controller/TransacaoController.js";

const router = express.Router();

const transacaoController = new TransacaoController();

router.post("/transacoes", (req, res) => transacaoController.create(req, res));
router.put("/transacoes/:id", (req, res) => transacaoController.update(req, res));
router.get("/transacoes", (req, res) => transacaoController.getAll(req, res));
router.get("/transacoes/:id", (req, res) => transacaoController.findByPk(req, res));
router.delete("/transacoes/:id", (req, res) => transacaoController.delete(req, res));


export default router;