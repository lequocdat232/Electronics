import express, { Express, Request, Response } from "express";
const app: Express = express();
import categoriesRouter from "./routes/v1/categories.route";
import postRoute from "./routes/v1/post.route";

app.use(express.json());

app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/posts", postRoute);

export default app;
