import db from "./config/database.config";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

db.sync().then(() => {
	console.log("connect to db");
});

app.listen(process.env.PORT || 4000, () => {
	console.log("server is running on port " + process.env.PORT || 4000);
});
