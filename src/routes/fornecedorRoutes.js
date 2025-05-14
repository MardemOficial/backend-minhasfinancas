import express from "express";
import FornecedorController from "../controller/FornecedorController.js";

const router = express.Router();
const fornecedorController = new FornecedorController();

router.post("/fornecedores", (req, res) => fornecedorController.create(req, res));
router.put("/fornecedores/:id", (req, res) => fornecedorController.update(req, res));
router.get("/fornecedores", (req, res) => fornecedorController.getAll(req, res));
router.get("/fornecedores/:id", (req, res) => fornecedorController.findByPk(req, res));
router.delete("/fornecedores/:id", (req, res) => fornecedorController.delete(req, res));

export default router;