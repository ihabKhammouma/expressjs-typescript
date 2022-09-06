import { Request, Response } from "express";
import { CategoryInstance, CatProd } from "../../category/model";
import { ProductInstance } from "../model";

class ProductController {
	async create(req: Request, res: Response) {
		try {
			const record = await ProductInstance.create({ ...req.body });
			if (req.body.category_ids) {
				const data = req.body.category_ids.map((id: number) => {
					return { CategoryInstanceId: id, ProductInstanceId: record.id };
				});
				await CatProd.bulkCreate(data);
			}

			return res.json({
				record,
				msg: "Successfully create Product",
				CatProd,
			});
		} catch (e) {
			return res.json({
				msg: "fail to create",
				status: 500,
				route: "/products",
				e,
			});
		}
	}
}

export default new ProductController();
