import { createContext } from "react";

export const AuthContext = createContext({
  user: null,
  token: null,
  errorMessage: null,
  updatePassword: () => {},
  signin: () => {},
  signout: () => {}
});