import express from "express";

const router = express.Router();

router.get("/", (_, res) => {
  res.status(200).json({ payload: "Hello" });
});

export default router;
