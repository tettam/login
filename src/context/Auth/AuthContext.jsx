import { createContext } from "react";

export const AuthContext = createContext({
  user: () => {},
  updatePassword: () => {},
  signin: () => {},
  signout: () => {}
});