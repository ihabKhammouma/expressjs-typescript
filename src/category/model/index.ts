import { DataTypes, Model } from "sequelize";
import db from "../../config/database.config";

interface CategoryAttributes {
	id: string;
	name: string;
}

export class CategoryInstance extends Model<CategoryAttributes> {}

CategoryInstance.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: db,
		tableName: "category",
	}
);
