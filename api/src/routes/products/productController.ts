import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("the list of prodcut 123");
}
export function getProductById(req: Request, res: Response) {
  res.send("getproductbyid");
}
export function createProduct(req: Request, res: Response) {
  res.send("the list of prodcut 123");
}
export function updateProduct(req: Request, res: Response) {
  res.send("the list of prodcut 123");
}

export function deleteProduct(req: Request, res: Response) {
  res.send("the list of prodcut 123");
}
