import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
} from "../Controller/ProductContoller";

const router: Router = Router();

router.post("/create", createProduct);
router.get("/read", getAllProduct);
router.get("/read-one/:_id", getOneProduct);
router.delete("/delete/:_id", deleteProduct);
router.patch("/update/:_id", updateProduct);

export default router;
