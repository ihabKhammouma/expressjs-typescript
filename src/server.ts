import db from "./config/database.config";
import app from "./app";

db.sync().then(() => {
	console.log("connect to db");
});
//# todo config in .env
const port = 9100;

app.listen(port, () => {
	console.log("server is running on port " + port);
});
