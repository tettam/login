import { createContext } from "react";

export const AuthContext = createContext({
  user: null,
  token: null,
  updatePassword: () => {},
  signin: () => {},
  signout: () => {}
});