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
    try {
      const data = await apiRequest.validatorToken(user);
      if(data.Token != null){
        setToken(data.token);
        setUser(user);
        return true;
      }
    } catch (error) {
      return false;
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