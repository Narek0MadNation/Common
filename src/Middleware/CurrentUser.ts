import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserPayload } from "../Types/types";

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];

    const payload = verify(token, process.env.JWT_KEY!);

    if (!payload) return next();

    req.currentUser = payload as UserPayload;
  } catch (error) {
    throw error;
  }

  next();
};
