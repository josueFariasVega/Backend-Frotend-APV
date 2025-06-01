import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");

  const [alerta , setAlerta] = useState({});


  //validaciones
  const handleSubmit = e => { 
    e.preventDefault();
    
    if ([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({msg: 'Hay campos vacios', error:true});
      return
    }
    if ( password !== repetirPassword) {
      setAlerta({msg: 'Los passwords deben ser iguales', error:true});
      return
    }
    if (password.length < 6) {
      setAlerta({msg: 'El password es corto, debe contener mas de 6 letras', error:true});
      return
    }
  //Crear el usuario en el api
    
  }




  return (
    <>
        <div>
            <h1 className="text-indigo-600 font-black text-6xl">
              Crea tu cuenta y Administra
              <span className="text-black"> Tus pacientes</span>
            </h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg px-5 py-10  md:mt-5"> 


            {
              alerta?.msg && <Alerta
              alerta={alerta}
            />
            }
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                  <label 
                    className="uppercase text-gray-600 block text-xl font-bold">
                    Nombre
                  </label>
                  <input 
                    type="nombre"
                    placeholder="Tu nombre"
                    className="border border-gray-100 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                  />
                </div>

                <div className="my-5">
                  <label 
                    className="uppercase text-gray-600 block text-xl font-bold">
                    Email
                  </label>
                  <input 
                    type="email"
                    placeholder="Tu email"
                    className="border border-gray-100 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                    className="border border-gray-100 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>

                <div className="my-5">
                    <label 
                    className="Uppercase text-gray-600 block text-xl font-bold"
                    >
                      Repite tu password
                    </label>
                    <input 
                    type="password"
                    placeholder="Repite tu password"
                    className="border border-gray-100 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={repetirPassword}
                    onChange={ e => setRepetirPassword(e.target.value)}
                     />
                </div>

                <input 
                type="submit"
                value= "Crear cuenta"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold hover:bg-indigo-800 hover:cursor-pointer md:w-auto"
                
                />
                

                <nav className="mt-10 lg:flex lg:justify-between">
                  <Link
                  to="/"
                  className="block text-center my-5 text-gray-500"
                  >
                  Ya tienes una cuenta? Inicia sesion
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

export default Registrar