import { body } from "express-validator";

class CategoryValidator {
	checkCreateCategory() {
		return [
			body("name").notEmpty().withMessage("The name value should not be empty"),
		];
	}
}

export default new CategoryValidator();
