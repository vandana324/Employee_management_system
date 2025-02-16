import React, { useState } from 'react';

const Login = ({handleLogin}) => {

 

    const [email,setemail] = useState('')
    const [password,setPassword] = useState('')

    const sumbitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        // console.log("email is",email)
        // console.log("password is",password)

        setemail("")
        setPassword("")
    }
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="border-2 border-emerald-600 p-8 rounded-lg shadow-lg">
          <form 
          onSubmit={(e)=>{
            sumbitHandler(e)}}

          className="flex flex-col items-center space-y-4">
            <input
            value={email}
              className="text-black border-2 border-emerald-600 bg-white placeholder-gray-500 rounded-full px-4 py-2 w-64"
              required
              onChange={(e)=>{
                setemail(e.target.value)
              }}
              type="email"
              placeholder="Enter your Email"
            />
            <input
            value={password}
              className="border-2 border-emerald-600 bg-white text-black placeholder-gray-500 rounded-full px-4 py-2 w-64"
              required
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              type="password"
              placeholder="Enter your password"
            />
            <button className="text-white hover:bg-700 w-64 border-none border-2 bg-emerald-600 text-xl py-3 px-5 cursor-pointer rounded-full">
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;

  