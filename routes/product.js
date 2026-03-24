import { Router } from "express";
import Product from "../models/Product.js";

const router = Router();

router.post("/", (req, res) => {
  const productData = req.body;
  if (!productData) {
    return res.status(400).json({ error: "Faild to create products" });
  }

  Product.create(productData)
    .then((data) => {
      res
        .status(201)
        .json({ message: "Successfully created product", product: data });
    })
    .catch((err) => {
      res.status(400).json({ error: "Faild to create products" });
    });
});

export default router;
