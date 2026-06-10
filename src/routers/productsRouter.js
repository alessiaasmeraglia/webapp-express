import express from "express";
import { index } from "../controllers/productsController.js";

const router = express.Router();

// INDEX http://localhost:3000/products
router.get("/", index);

export default router;