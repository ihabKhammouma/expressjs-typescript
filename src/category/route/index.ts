import express from "express";
import CategoryValidator from "../validator";
import Middleware from "../../middleware";
import CategoryController from "../controller";

const router = express.Router();

router.post(
	"/categories",
	CategoryValidator.checkCreateCategory(),
	Middleware.handleValidationError,
	CategoryController.create
);
export default router;
