import { Routes, Route } from "react-router-dom"
import { Login, SignUp, Home } from "./"

export const RouterApp = () => {
   return (
      <Routes>

         <Route path="/" element={ <Home />} />
         <Route path="/sign" element={ <SignUp />} />
         <Route path="/login" element={ <Login />} />
         
         
         <Route path="/*" element={ <h3>Not Found </h3>} />
      </Routes>
   )
}