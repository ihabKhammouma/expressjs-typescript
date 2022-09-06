import { DataTypes, Model } from "sequelize";
import db from "../../config/database.config";

interface ProductAttributes {
	id: number;
	name: string;
	price: string;
	stock: number;
}

export class ProductInstance
	extends Model<ProductAttributes>
	implements ProductAttributes
{
	id!: number;
	name!: string;
	price!: string;
	stock!: number;
}
ProductInstance.init(
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
		price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		sequelize: db,
		tableName: "product",
		modelName: "ProductInstance",
	}
);
