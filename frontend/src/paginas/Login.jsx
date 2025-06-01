import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
        
          <div>
            <h1 className="text-indigo-600 font-black text-6xl">
              Inicia Sesion Y administra tus
              <span className="text-black"> Pacientes</span>
            </h1>
          </div>
          <div className="bg-white rounded-xl shadow-lg px-5 py-10  md:mt-5"> 
            <form>
                <div className="my-5">
                  <label 
                    className="uppercase text-gray-600 block text-xl font-bold">
                    Email
                  </label>
                  <input 
                    type="email"
                    placeholder="Tu email"
                    className="border-gray-50 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  />
                </div>

                <div className="my-5">
                  <label 
                    className="uppercase text-gray-600 block text-xl font-bold">
                    Password
                  </label>
                  <input 
                    type="password"
                    placeholder="Tu password"
                    className="border border-gray-50 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  />
                </div>

                <input 
                type="submit"
                value= "iniciar sesion"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold hover:bg-indigo-800 hover:cursor-pointer md:w-auto"
                />

                <nav className="mt-10 lg:flex lg:justify-between">
                  <Link
                  to="/Registrar"
                  className="block text-center my-5 text-gray-500"
                  >
                  Todavia no tines una cuenta?
                  </Link>
                  <Link
                  to="/OlvidePassword"
                  className="block text-center my-5 text-gray-500"
                  >
                  Olvidaste tu password?
                  </Link>
                </nav>

                

            </form>
          </div>
        
    </>

    
  )
}

export default Login