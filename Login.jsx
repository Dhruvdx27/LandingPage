import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = ({toggler , settoggler,pass,setpass,email,setemail,user,userdata,}) => {
   const submithandler=(e)=>{
   e.preventDefault()
    const match= userdata.find(user=> user.email === email && user.pass === pass)
    if(match){
      toast.success("Login Successful")
    }else{
      toast.error("account doesn't exists")
    }
    
   }

       let space=""
  return (
    <div className="rounded-[20px] px-[50px] py-[30px] w-[600px] h-[auto] border-[12px] border-rose-300  text-blue-950 bg-white text-center ">
        <form onSubmit={submithandler} className=" flex flex-col items-center justify-center gap-[30px] ">
          <h1 className="text-[60px] text-left font-extrabold leading-[50px]  text-gray-700" >We <br /> Awaited <br /> your Arrival</h1>
          <input required type="email" placeholder="e-mail" value={email} onChange={(e)=>setemail(e.target.value)} className="placeholder:text-white text-center focus:outline-none focus:ring-2 focus:ring-rose-300 font-bold text-[17px]  text-white focus:border-transparent rounded-[50px] px-[20px] py-[9px] bg-gray-400" />
          <input required type="password" placeholder="Password" value={pass} onChange={(e)=>setpass(e.target.value)} className="placeholder:text-white text-center focus:outline-none focus:ring-2 focus:ring-rose-300 font-bold text-[17px]  text-white focus:border-transparent rounded-[50px] px-[20px] py-[9px] bg-gray-400" />

          <button type='submit'  className="text-[16px] px-[15px] py-[10px] rounded-[50px] bg-white text-gray-600 hover:bg-rose-300 hover:text-white ease-in font-bold cursor-pointer">Log In</button>
          <small className="text-[14px] text-gray-500 ">
            Don't have an account? {space} 
            <button type='button' className="cursor-pointer text-rose-300 hover:underline hover:text-blue-400"  onClick={()=>settoggler(!toggler)}>SignUp</button>
          </small>
        </form>
        
      </div>    
)
}

export default Login