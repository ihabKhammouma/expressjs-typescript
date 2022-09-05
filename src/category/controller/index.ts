import { Request, Response } from "express";
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
			return res.json({ msg: "fail to read", status: 500, route: "/categories" });
		}
	}
}

export default new CategoryController();
