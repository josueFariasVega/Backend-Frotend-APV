import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import Login from "./paginas/Login"
import Registrar from "./paginas/Registrar"
import ConfirmarCuenta from "./paginas/ConfirmarCuenta"
import OlvidePassword from "./paginas/OlvidePassword"

function App() {
  

  return (

     <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>  
              <Route index element={<Login/>}/>
              <Route path="Registrar" element={<Registrar/>}/>
              <Route path="OlvidePassword/:token" element={<OlvidePassword/>}/>
              <Route path="ConfirmarCuenta/:token" element={<ConfirmarCuenta/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
  )
}

export default App
