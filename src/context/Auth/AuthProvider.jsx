import { useState } from "react";
import { AuthContext } from "./AuthContext";
import ApiRequest from "../../service/ApiRequest";

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [user , setUser] = useState(null);
  const apiRequest = new ApiRequest();

  const updatePassword = () => {

  }

  const signin = async (user) => {
    const data = await apiRequest.validatorToken(user);
    if(data.token != null){
      setToken(data.token);
      setUser(user);
      return true;
    }
    return false;
  }

  const signout = () => {
    setToken(null);
    setUser(null);
  }


  return (
    <AuthContext.Provider value={{ updatePassword , signin , signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;