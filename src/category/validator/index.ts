import { body, query, param } from "express-validator";

class CategoryValidator {
	checkCreateCategory() {
		return [
			body("name").notEmpty().withMessage("The name value should not be empty"),
		];
	}
	checkReadCategory() {
		return [
			query("limit")
				.optional()
				.isInt({ min: 1, max: 10 })
				.withMessage("The limit value should be number and between 1-10"),
			query("offset")
				.optional()
				.isNumeric()
				.withMessage("The value should be number"),
		];
	}
}

export default new CategoryValidator();
