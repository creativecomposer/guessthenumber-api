import { Request, Response } from "express";
import { comparePasswords, createJWT } from "../modules/auth";
import { User } from "../types";

// TODO: implement real signup and login functionality using an auth provider such as Auth0
export const signupUser = function (req: Request, res: Response) {
  res.json({ error: "Signup functionality coming soon" });
};

const realPassword =
  "$2b$10$9uBPY6wh5AK25Lz1CQXtaeX8SUxIcP5M5g7mHLMSf8fuxgOWdYLjC";

export const loginUser = async function (req: Request, res: Response) {
  if (req.body.username !== "player@example.com") {
    res.status(401).json({ error: "Incorrect credentials" });
    return;
  }

  const isValid = await comparePasswords(req.body.password, realPassword);

  if (!isValid) {
    res.status(401).json({ error: "Incorrect credentials" });
    return;
  }

  const token = createJWT(req.body.username);
  const user: User = {
    name: "Nelson Mandela",
    username: req.body.username,
  };

  res.json({ token, user });
};
