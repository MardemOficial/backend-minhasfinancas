import express from "express";
import ContaController from "../controller/contaController.js";

const router = express.Router();
const contaController = new ContaController();

router.post("/contas", (req, res) => contaController.create(req, res));
router.put("/contas/:id", (req, res) => contaController.update(req, res));
router.get("/contas", (req, res) => contaController.getAll(req, res));
router.get("/contas/:id", (req, res) => contaController.findByPk(req, res));
router.delete("/contas/:id", (req, res) => contaController.delete(req, res));

export default router;