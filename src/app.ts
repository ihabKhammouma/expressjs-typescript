import express from "express";
import categoryRouter from "./category/route";

const app = express();

app.use(express.json());

app.use("/", categoryRouter);

export default app;
