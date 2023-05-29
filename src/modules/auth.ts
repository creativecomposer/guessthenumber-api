import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JwtPayload } from "jsonwebtoken";

export const comparePasswords = function (password: string, hash: string) {
  return bcrypt.compare(password, hash);
};

export const createJWT = function (username: string) {
  return jwt.sign(
    {
      username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

export const verifyJWT = function (token: string): JwtPayload | null {
  try {
    return jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
  } catch (e) {
    console.error(e);
  }
  return null;
};
