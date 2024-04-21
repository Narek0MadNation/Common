import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserPayload } from "../Types/types";
import { NotAuthorizedError } from "../Error/NotAuthorizedError";

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    throw new NotAuthorizedError();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];

    const payload = verify(token, process.env.JWT_KEY!);

    if (!payload) throw new NotAuthorizedError();

    req.currentUser = payload as UserPayload;
  } catch (error) {
    throw error;
  }

  next();
};
