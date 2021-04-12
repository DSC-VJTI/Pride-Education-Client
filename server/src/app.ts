import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes";
import dbConnect from "./config/dbconnect";
import path from "path";

dotenv.config();
const app = express();
dbConnect();

app.use(express.json({ limit: "10mb" }));
app.use(cors());

app.use(morgan("dev", { skip: () => process.env.NODE_ENV === "test" }));

app.use("/api", router);

app.use(express.static(path.resolve("../", "client/build")));

if (process.env.NODE_ENV === "production") {
  app.get("/*", (_: express.Request, res: express.Response) => {
    res.sendFile(path.resolve("../", "client/build/index.html"));
  });
}

let port = process.env.PORT || 8000;
if (process.env.NODE_ENV === "test") {
  port = 8001;
}

const listen = app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

export default listen;
