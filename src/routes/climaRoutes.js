import express from "express";
import { climaController, cadastrarClima } from "../controllers/climasController.js";

const router = express.Router();

router
    .get("/climas", climaController.listarClimaPesquisados)
    .post("/climas/:cidade", cadastrarClima)

export default router;