import React, { useState } from 'react';
const Login = ()=>{
   const[isLoginMode,setIsLoginMode] = useState(true)
   return(
    <div className='flex flex-col gap-y-2 items-center justify-center w-[380px] min-h-[380px] bg-white p-8 rounded-2xl shadow-lg'>
      <div className='flex justify-center'>
        <h2 className='text-3xl font-semibold text-center mt-2 mb-4'>{ isLoginMode ? "Login" : "SignUp" }</h2>
      </div>
      <div className='relative flex h-12 w-[300px] mb-6 border border-gray-300 rounded-full overflow-hidden'>
        <button type='button' onClick={()=> setIsLoginMode(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}>
          Login
        </button>
        <button type='button' onClick={()=> setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}>
          Sign Up
        </button>
        <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ? "left-0" : "left-1/2"}`}></div>
      </div>
      <form className='space-y-4 px-4'>
        <div className='flex flex-col items-center gap-y-4'>
        { !isLoginMode && (
          <input type="text" placeholder='Name' required className='
          w-full p-3 h-[35px] border-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 rounded text-1xl text-semibold mx-4'/>
        )}

        <input type="email" placeholder='Email Address' required className='
          w-[300px] h-[35px] p-3 px-2 border-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 rounded text-1xl text-semibold mx-4'/>
        <input type="password" placeholder='password' required className='
          w-[300px] p-3 h-[35px] px-2 border-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 rounded text-1xl text-semibold mx-4'/>
        
        { !isLoginMode && (
          <input type='password' placeholder='confirm password' required className='
          w-[300px] h-[35px] p-3 px-2 border-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 rounded text-1xl text-semibold mx-4'/>
        )}
        { isLoginMode && (
         <div className='text-right'>
          <p className='text-cyan-600 hover:underline'>Forget Password</p>
         </div>
        )}

        <button className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition'>
          {isLoginMode ? "Login" : "SignUp"}
        </button>
        <p className='text-center text-gray-600'>{isLoginMode ? "Don't have an account" : "Already have an account"}
          <a href="#" onClick={(e)=> setIsLoginMode(!isLoginMode)} className='text-cyan-600 hover-underline'>
            {isLoginMode ? "Signup now" : "Login"}
          </a>
        </p>
      </div>
      </form>
    </div>
    
   );
};
export default Login;