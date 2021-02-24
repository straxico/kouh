import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import { createNewUser } from "../Services/user";

/**
 * POST /login
 * Sign in using email and password.
 */
export const postLogin = async (req: Request, res: Response) => {
  await check("username", "Username is not valid").isLength({ min: 4 }).run(req);
  await check("password", "Password cannot be blank").isLength({ min: 1 }).run(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send(errors.array());
  }
  return res.send({ msg: "ready for login" });
};

/**
 * POST /signup
 * Create a new local account.
 */
export const postSignup = async (req: Request, res: Response, next: NextFunction) => {
  await check("username", "Username is not valid").isLength({ min: 4 }).run(req);
  await check("email", "Email is not valid").isEmail().run(req);
  await check("password", "Password must be at least 4 characters long")
    .isLength({ min: 4 })
    .run(req);
  await check("token", "Password must be at least 4 characters long").isLength({ min: 4 }).run(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send(errors.array());
  }

  try {
    const users = await createNewUser({});
    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (e) {
    return next(e);
  }
};
