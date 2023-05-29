import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { verifyJWT } from "../modules/auth";
import { RequestWithUser, User } from "../types";

export const checkContentType = function (
  req: Request,
  res: Response,
  next: () => void
) {
  if (req.is("application/json")) {
    next();
  } else {
    res.status(400).json({ error: "Content-Type is not application/json" });
  }
};

export const handleInputErrors = function (
  req: Request,
  res: Response,
  next: () => void
) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  } else {
    next();
  }
};

export const checkAuthn = (
  req: RequestWithUser,
  res: Response,
  next: () => void
) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: "Unauthorized request" });
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "Invalid token" });
    return;
  }

  const user = verifyJWT(token);
  if (user === null) {
    res.status(401);
    res.json({ message: "Invalid token" });
    return;
  }
  req.user = user as User;
  next();
};
