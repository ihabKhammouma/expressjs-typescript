import { body } from "express-validator";

class ProductValidator {
	checkCreateProduct() {
		return [
			body("name").notEmpty().withMessage("The name value should not be empty"),
			body("price")
				.notEmpty()
				.isFloat({ min: 0 })
				.withMessage("The price value should not be empty"),

			body("category_ids")
				.isArray({ min: 1 })
				.withMessage(
					"The category_ids is array at least one value should not be empty"
				)
				.optional({ nullable: true }),
			body("category_ids.*")
				.isNumeric()
				.withMessage("The category_ids is array number"),
			body("stock")
				.isInt({ min: 0 })
				.withMessage("The stock value should be spositif")
				.optional({ nullable: true }),
		];
	}
}

export default new ProductValidator();
