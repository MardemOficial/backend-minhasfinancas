import express from "express";
import CategoriaController from "../controller/CategoriaController.js";

const router = express.Router();

const categoriaController = new CategoriaController();

router.post("/categorias", (req, res) => categoriaController.create(req, res));
router.put("/categorias/:id", (req, res) => categoriaController.update(req, res));
router.get("/categorias", (req, res) => categoriaController.getAll(req, res));
router.get("/categorias/:id", (req, res) => categoriaController.findByPk(req, res));
router.delete("/categorias/:id", (req, res) => categoriaController.delete(req, res));

export default router;