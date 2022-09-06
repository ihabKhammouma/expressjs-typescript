import express from "express";
import CategoryValidator from "../validator";
import Middleware from "../../middleware";
import CategoryController from "../controller";

const router = express.Router();

router.post(
	"/",
	CategoryValidator.checkCreateCategory(),
	Middleware.handleValidationError,
	CategoryController.create
);
router.get(
	"/",
	CategoryValidator.checkReadCategory(),
	Middleware.handleValidationError,
	CategoryController.getAll
);
router.get(
	"/:id/products",
	CategoryValidator.checkIdParam(),CategoryValidator.checkReadCategory(),
	Middleware.handleValidationError,
	CategoryController.getProductsById
);
export default router;
