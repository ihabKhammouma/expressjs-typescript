import express from "express";
import categoryRouter from "./category/route";
import productRouter from "./product/route";
const app = express();

app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/products", productRouter);
export default app;
