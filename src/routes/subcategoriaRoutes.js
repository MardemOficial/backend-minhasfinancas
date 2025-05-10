import express from "express";
import SubcategoriaController from '../controller/SubcategoriaController.js';

const router = express.Router();

const subcategoriaController = new SubcategoriaController();

router.post("/subcategorias", (req, res) => subcategoriaController.create(req, res));
router.put("/subcategorias/:id", (req, res) => subcategoriaController.update(req, res));
router.get("/subcategorias", (req, res) => subcategoriaController.getAll(req, res));
router.get("/subcategorias/:id", (req, res) => subcategoriaController.findByPk(req, res));
router.delete("/subcategorias/:id", (req, res) => subcategoriaController.delete(req, res));

export default router;
