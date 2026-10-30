import e from "express";
import connectDB from "./config/mongo.config.js";

import userRoutes from "./routes/user.routes.js";

const PORT = process.env.PORT || 3050;

const app = e();

connectDB();

app.use(e.json());

app.use("/api/user", userRoutes);

app.listen(PORT, () => { })