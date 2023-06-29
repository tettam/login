import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

const Home = () => {
  const auth = useContext(AuthContext);


  return (
    <p>Olá</p>
  )
}

export default Home;