import { User } from "../Models/user";

type newUserData = {
  username?: string;
  email?: string;
  password?: string;
  token?: string;
};
export const createNewUser = async (newUserData: newUserData) => {
  const user = new User({
    username: newUserData.username,
    email: newUserData.email,
    password: newUserData.password,
    token: newUserData.token,
  });

  User.find({ email: newUserData.email, username: newUserData.username }, (err, existingUser) => {
    if (err) {
      return err;
    }
    if (existingUser.length) {
      return "Account with that email address or username already exists.";
    }
    user.save((err) => {
      if (err) {
        return err;
      }
      return { user };
    });
  });
};
