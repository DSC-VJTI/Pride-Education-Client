import express from "express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();
const app = express();

app.use("/api", router);

const port = process.env.PORT || 3000;

app.listen(port);

export default app;
