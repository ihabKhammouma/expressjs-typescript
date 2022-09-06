import { DataTypes, Model } from "sequelize";
import db from "../../config/database.config";
import { ProductInstance } from "../../product/model";

interface CategoryAttributes {
	id: string;
	name: string;
}

export class CategoryInstance
	extends Model<CategoryAttributes>
	implements CategoryAttributes
{
	id!: string;
	name!: string;
}

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
		modelName: "CategoryInstance",
	}
);

export class CatProd extends Model {}
CatProd.init(
	{},
	{
		sequelize: db,
		tableName: "cat_prod",
		modelName: "CatProd",
	}
);
CategoryInstance.belongsToMany(ProductInstance, { through: CatProd });
ProductInstance.belongsToMany(CategoryInstance, { through: CatProd });
