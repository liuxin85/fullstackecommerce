import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  listProducts,
  updateProduct,
} from "./productController";
import { validateData } from "../../middlewares/validationMiddleware";
import { z } from "zod";
import { createInsertSchema, createUpdateSchema } from "drizzle-zod";
import { productsTable } from "../../db/productsSchema";

export const createProductSchema = createInsertSchema(productsTable);
export const updateProductSchema = createUpdateSchema(productsTable);

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.post("/", validateData(createProductSchema), createProduct);
router.put("/:id", validateData(updateProductSchema), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
