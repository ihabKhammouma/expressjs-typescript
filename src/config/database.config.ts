import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(
	process.env.DB_NAME || "postgres",
	process.env.DB_USER || "postgres",
	process.env.DB_PASSWORD || "postgres",
	{
		host: process.env.DB_HOST || "db",
		dialect: "postgres",
		logging: false,
	}
);

export default db;
