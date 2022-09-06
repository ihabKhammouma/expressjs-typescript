import express from "express";
import ProductValidator from "../validator";
import Middleware from "../../middleware";
import ProductController from "../controller";

const router = express.Router();

router.post(
	"/",
	ProductValidator.checkCreateProduct(),
	Middleware.handleValidationError,
	ProductController.create
);
export default router;
