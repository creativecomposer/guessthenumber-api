import { Router } from "express";
import { signupUser, loginUser } from "../handlers/auth";
import { checkAuthn, checkContentType, handleInputErrors } from "../middleware";
import { body } from "express-validator";
import { putGuess, startGame } from "../handlers/games";

const router = Router();

router.post(
  "/signup",
  checkContentType,
  body("username").trim().isEmail(),
  body("password").trim().notEmpty(),
  handleInputErrors,
  signupUser
);

router.post(
  "/login",
  checkContentType,
  body("username").trim().isEmail(),
  body("password").trim().notEmpty(),
  handleInputErrors,
  loginUser
);

router.post("/games", checkContentType, checkAuthn, startGame);
router.put(
  "/games/:id",
  checkContentType,
  checkAuthn,
  body("guess").custom((value) => Number.isInteger(value)),
  putGuess
);

export default router;
