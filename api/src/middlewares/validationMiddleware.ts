import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";

export function validateData(schema: z.ZodObject<any, any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = schema.parse(req.body);
      console.log(parsed);
      req.body = parsed; // 把 parse过的对象写回去
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res
          .status(400)
          .json({ error: "Invalid data", details: JSON.parse(error.message) });
      } else {
        res.status(500).json({ error: "Internal Server" });
      }
    }
  };
}
