import { Link } from "react-router-dom"
import LogoFacebook from "../assets/facebookLogo.png"
import LogoGoogle from "../assets/google.png"
import Logo from "../assets/logo.png"

export const Login = () => {
   return (
      <div className="animate__animated animate__fadeInLeft p-2 h-[600px] w-[320px] bg-white rounded-[10px] flex flex-col items-center mb-10px">

         <a href="#" className="mt-5">
            <img width="80px" src={ Logo } alt="logo" />
         </a>

         <form className="w-full font-semibold relative flex flex-col items-center">

            <label htmlFor="username" className="w-full mb-5 font-sans flex flex-col justify-start pl-4 pr-4 relative">
               Username
               <input className="input relative text-sm p-2 border-b-[2px] bg-slate-200 rounded-md " type="text" name="username" id="username" required placeholder="Type your username"/>
               <i className="bi bi-person-fill icon absolute right-7 bottom-2"></i>
            </label>

            <label htmlFor="userpassword" className="w-full mb-5 font-sans flex flex-col justify-start pl-4 pr-4 relative">
               Password 
               <input className="p-2 input relative text-sm border-b-[2px] rounded-md bg-slate-200" type="password" name="password" id="userpassword" required placeholder="Type your password"/>
               <i className="bi bi-person-fill-lock icon absolute right-6 bottom-2"></i>
            </label>
            <span className="text-end mb-2">Forgot password?</span>
            <button className="font-bold w-[85%] p-[10px] border-2 border-slate-900 transition-colors rounded-full bg-slate-900 text-white hover:bg-white hover:text-slate-900 hover:border-2 hover:border-slate-900 mb-5">Login</button>
         </form>
         <section className="w-full flex flex-col justify-center items-center">
            <button className="mb-[10px] rounded-full flex items-center justify-center transition-colors font-bold w-[85%] p-[8px] border-2 border-slate-900 hover:bg-slate-900 hover:text-white ">
               <img width="35" src={LogoGoogle} alt="google" />
               <span>Continue with google</span>
            </button>

            <div className="mt-16">
               <span className="font-sans">Don't have an account?</span>
               <Link className="font-sans border-b-2 border-slate-900" to="/sign"> Sign up</Link>
            </div>
         </section>
      </div>
   )
}