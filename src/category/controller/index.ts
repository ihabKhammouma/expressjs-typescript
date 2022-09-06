import { Request, Response } from "express";
import { ProductInstance } from "../../product/model";
import { CategoryInstance } from "../model";

class CategoryController {
	async create(req: Request, res: Response) {
		try {
			const record = await CategoryInstance.create({ ...req.body });
			return res.json({ record, msg: "Successfully create Category" });
		} catch (e) {
			return res.json({
				msg: "fail to create",
				status: 500,
				route: "/categories",
			});
		}
	}
	async getAll(req: Request, res: Response) {
		try {
			const limit = (req.query.limit as number | undefined) || 10;
			const offset = req.query.offset as number | undefined;

			const records = await CategoryInstance.findAll({
				where: {},
				limit,
				offset,
			});
			return res.json(records);
		} catch (e) {
			return res.json({
				msg: "fail to read",
				status: 500,
				route: "/categories",
			});
		}
	}
	async getProductsById(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const limit = (req.query.limit as number | undefined) || 10;
			const offset = req.query.offset as number | undefined;
			const records = await CategoryInstance.findOne({
				where: { id },
				limit,
				offset,
				include: [
					{
						model: ProductInstance,
						as: "products",
						attributes: { exclude: ["createdAt", "updatedAt"] },
						through: { attributes: [] },
					},
				],
				subQuery: false,
			});
			const final = records?.products;
			return res.json(final);
		} catch (e) {
			return res.json({
				msg: "fail to read",
				status: 500,
				route: "/products",
				e,
			});
		}
	}
}

export default new CategoryController();
