import express, { json } from "express";
import productRoutes from "./routes/products";

const port = 3000;

const app = express();
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
