import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify';


const User = ({userdata , setuserdata,}) => {
  
 const deletehandler=(id)=>{
  const copyuserdata=[...userdata];
  const filtereduserdata = copyuserdata.filter((user)=>user.id != id);
  setuserdata(filtereduserdata)
  toast.success("Account deleted")
 }
  return (
    <div className="w-[30%] h-[600px] overflow-y-hidden p-[60px] border-10px border-rose-300">
      {userdata.length === 0 ? (<h1 className='text-4xl text-red-400 font-thin'>Data not found!!</h1>) :(

    <ul>
      {userdata.map((user,idx)=>(
        <li key={user.id}  className="bg-gray-600 p-[10px] rounded mb-[10px] flex items-center justify-between">
        <section >
          <h1  className="text-xl font-light text-rose-200 ">{user.name}</h1>
          <small  className="text-[17px] text-white">{user.email}</small>
        </section>
        <span onClick={()=>deletehandler(user.id)} className='text-red-500 cursor-pointer'>Delete</span>
      </li>
      ))}
    </ul>
      )}

  </div>
  )
}

export default User