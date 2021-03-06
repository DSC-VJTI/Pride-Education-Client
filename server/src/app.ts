import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes";
import dbConnect from "./config/dbconnect";

dotenv.config();
const app = express();

dbConnect();

app.use(express.json({ limit: "10mb" }));
app.use(cors());

app.use(morgan("dev"));

app.use("/api", router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

export default app;
