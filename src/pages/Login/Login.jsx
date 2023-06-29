import React, { useContext , useEffect, useState} from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const auth = useContext(AuthContext);
  const [error , setError] = useState(false);
  const [errorMessage , setErrorMessage] = useState(auth.errorMessage)
  const navigate = useNavigate();
  const [user , setUser] = useState({email: "", password: ""})

  useEffect(() => {
    setErrorMessage(auth.errorMessage)
  }, [auth.errorMessage])

  const handInputUser = (data) => {
    const object = {...user}
    object.email = data;
    setUser(object);
  }

  const handInputPassword = (data) => {
    const object = {...user}
    object.password = data;
    setUser(object);
  }

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    if(user.email !== '' && user.password !== ''){
      const isLogged = await auth.signin(user);
      if(isLogged){
        resetInput();
        navigate('/home');
      } else {
        setErrorMessage("Email ou senha inválidos")
        setError(true);
      }
    } else {
      setErrorMessage("Preencha todos os campos!")
      setError(true);
    }
  }

  const resetInput = () => {
    const clearObject = {...user};
    clearObject.email = '';
    clearObject.password = '';
    setError(false)
    setUser(clearObject);
  }

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Autenticação de Usuário
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Entre com sua conta
          </h1>

        {error &&     
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Erro</strong>
            <hr />
            <span class="block sm:inline">{errorMessage}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"onClick={resetInput} /></svg>
            </span>
          </div>
        }

          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu email</label>
              <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={e => handInputUser(e.target.value)}
              value={user.email} />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
              <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => handInputPassword(e.target.value)}
              value={user.password}/>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">Lembrar-me</label>
                </div>
              </div>
                <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Esqueceu a senha?</a>
            </div>
            <button class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={e => handleClickSubmit(e)}>Entrar</button>

            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Não tem conta? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Cadastre-se</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login;