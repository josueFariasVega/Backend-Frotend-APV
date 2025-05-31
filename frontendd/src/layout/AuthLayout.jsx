import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
        <main className="container mx-auto my-auto md:grid grid-cols-2  gap-30 p-5 items-center ">
            <Outlet/>
        </main>
    </>

    
  )
}

export default AuthLayout