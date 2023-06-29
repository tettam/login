import { useState } from "react";
import { AuthContext } from "./AuthContext";
import ApiRequest from "../../service/ApiRequest";

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user , setUser] = useState(null);
  const [errorMessage , setErrorMessage] = useState(null)
  const apiRequest = new ApiRequest();

  const signin = async (user) => {
    try {
      const data = await apiRequest.validatorToken(user);
      if(data.token && data){
        setToken(data.token);
        setUser(user);
        localStorage.setItem('TOKEN_KEY', data.token)
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  const signout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('TOKEN_KEY');
  }

  const authentication = () => {
    return localStorage.getItem('TOKEN_KEY' != null);
  }

  return (
    <AuthContext.Provider 
      value={{ 
        user,
        token,
        errorMessage,
        authentication,
        signin,
        signout 
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;