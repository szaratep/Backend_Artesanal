import e from "express";
import connectDB from "./config/mongo.config.js";

const PORT = process.env.PORT || 3050;

const app = e();

connectDB();

app.use(e.json());

app.listen(PORT, () => { })