import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/Login/Login";

export const RequiredAuth = ({children}) => {
  const auth = useContext(AuthContext);
  if(!auth.token) {
    return <Login />
  }
  return children;
}

export default RequiredAuth;