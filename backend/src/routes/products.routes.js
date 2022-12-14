import { Router } from "express";
import { verifyToken, isModerator, isAdmin} from "../middlewares/authJwt.js";
const router = Router();
import {getAllProducts, newProduct, getOneProduct, getProductByCategory, updateProduct, deleteProduct} from "../controllers/products.controller.js";

router.get("/", getAllProducts);
router.post("/", [verifyToken, isModerator], newProduct);

router.get("/:productId", getOneProduct);
router.get("/category/:category", getProductByCategory)
router.put("/:productId", [verifyToken, isAdmin], updateProduct);

router.delete("/:productId", [verifyToken, isAdmin], deleteProduct);

export default router
