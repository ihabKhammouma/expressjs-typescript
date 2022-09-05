import { Sequelize } from "sequelize";
//# todo config in .env
const db = new Sequelize("app", "", "", {
	storage: "./database.sqlite",
	dialect: "sqlite",
	logging: false,
});

export default db;
