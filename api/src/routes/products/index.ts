import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Product list");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("A Product");
});

router.post("/", (req, res) => {
  res.send("New product created!");
});

export default router;
