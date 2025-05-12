import { useState } from "react"
import Signup from "./components/Signup"
import Login from "./components/Login"
import User from "./components/User"
import { ToastContainer } from "react-toastify"
const App = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const [toggler, settoggler] = useState(true)
  const [userdata, setuserdata] = useState([])
       const user={
            name,email,pass,
           
          }



  
  return (
  <main className="w-screen h-screen bg-gray-800  p-[10px] flex  items-center justify-center gap-[10px]">
    <div className="w-[60%]" >
     {toggler? 
     <Signup 
     settoggler={settoggler} 
     toggler={toggler}
     email={email}
     setemail={setemail}
     pass={pass}
     setpass={setpass}
     name={name}
     setname={setname}
     userdata={userdata}
     setuserdata={setuserdata}
     user={user}
     />
     
     :
     <Login 
     settoggler={settoggler} 
     toggler={toggler}
     email={email}
     userdata={userdata}
     setemail={setemail}
     pass={pass}
     setpass={setpass}
     user={user}
          />} 
    </div>
    <User 
    userdata={userdata}
    setuserdata={setuserdata}
    />
    <ToastContainer/>
  </main>
  )
}

export default App
    

  

  

