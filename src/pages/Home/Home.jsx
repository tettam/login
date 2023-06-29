import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

const Home = () => {
  const auth = useContext(AuthContext);

  const handleClickSignout = () => {
    auth.signout();
  }

  return (
    <>
     <p>Olá</p>
      <button class="bg-transparent hover:bg-blue-500   text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleClickSignout}>
      Sair
      </button>
    </>
   
  )
}

export default Home;