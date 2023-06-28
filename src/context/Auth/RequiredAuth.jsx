import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/Login/Login";
import { Link } from "react-router-dom";

export const RequiredAuth = ({children}) => {
  const auth = useContext(AuthContext);
  if(auth.signin) {
    <Link path="/login" />
    return <Login />
  }
  return children;
}

export default RequiredAuth;