import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Signup = ({toggler , settoggler,name,setname,pass,setpass,email,setemail,userdata,setuserdata,user,}) => {
       let space=""
       const submithandler=(e)=>{
        e.preventDefault()
        const data ={
          id:nanoid(),
          name, email, pass,
        };
        const match= userdata.find(user=> user.email === email)
        if(match){
          toast.error("Account already exists")
        }else{
          
                    setuserdata((prevlist)=>[...prevlist,data])
                    toast.success("Account Created")
        }
          
       }

  return (
    <div className="rounded-[20px] px-[50px] py-[30px] w-[600px] h-[auto] border-[12px] border-rose-300  text-blue-950 bg-white text-center ">
        <form onSubmit={submithandler}  className=" flex flex-col items-center justify-center gap-[30px] ">
          <h1 className="text-[60px] text-left font-extrabold leading-[50px]  text-gray-700" >Let's <br /> Built a <br /> new relation</h1>
          <input required type="text" placeholder="Full Name" value={name} onChange={(e)=>setname(e.target.value)} className="placeholder:text-white text-center focus:outline-none focus:ring-2 focus:ring-rose-300 font-bold text-[17px] capitalize text-white focus:border-transparent rounded-[50px] px-[20px] py-[9px] bg-gray-400" />
          <input required type="email" placeholder="e-mail" value={email} onChange={(e)=>setemail(e.target.value)} className="placeholder:text-white text-center focus:outline-none focus:ring-2 focus:ring-rose-300 font-bold text-[17px]  text-white focus:border-transparent rounded-[50px] px-[20px] py-[9px] bg-gray-400" />
          <input required type="password" placeholder="Password" value={pass} onChange={(e)=>setpass(e.target.value)} className="placeholder:text-white text-center focus:outline-none focus:ring-2 focus:ring-rose-300 font-bold text-[17px]  text-white focus:border-transparent rounded-[50px] px-[20px] py-[9px] bg-gray-400" />

          <button type='submit'  className="text-[16px] px-[15px] py-[10px] rounded-[50px] bg-white text-gray-600 hover:bg-rose-300 hover:text-white ease-in font-bold cursor-pointer">Sign Up</button>
          <small className="text-[14px] text-gray-500 ">
            Already have an account? {space} 
            <button type="button" onClick={()=>settoggler(!toggler)} className="cursor-pointer text-rose-300 hover:underline hover:text-blue-400" >SignIn</button>
          </small>
        </form>
        
      </div>    
)
}

export default Signup