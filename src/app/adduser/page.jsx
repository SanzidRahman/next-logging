"use client"

import { useState } from "react"

const page = () => {
  const [name,setName] =useState('')
  const [age,setAge] =useState('')
  const [email,setEmail] =useState('')

// useEffect(()=>{
//   const fetchData = async ()=>{
//     let data = await fetch('http://localhost:3000/api/user')
//     data = await data.json()
//   //  setName(data.name)
//   //  setAge(data.age)
//   //  setEmail(data.email)

//   }
// fetchData()
// } ,[])





   async function handleClick(){
   
    let data = await fetch('http://localhost:3000/api/post',{
      method : "post",
      body: JSON.stringify({name,age,email})
    })
    data = await data.json();
   
    setName('')
    setAge('')
    setEmail('')
    if(data.success){
  alert("New User has been created")
    }else{
   alert("some errors has been occured ..Please check your information")
    }
  
}

  return (
    <div>
    <h1 className="h-6 w-full bg-black text-white text-center">This Form has been Created For POST Method Practice</h1>
         <div className="h-96 w-5/12 bg-slate-300 flex flex-col mt-4 absolute left-1/4 top-[120px] rounded-lg">
         <h1 className="text-center mt-4 text-xl">Add New Users</h1>
          <input
            className="p-4 rounded-md ml-4 mr-4 mt-4"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          ></input>
           <input
            className="p-4 rounded-md ml-4 mr-4 mt-4"
            type="number"
            placeholder="Enter Your Age"
            name="age"
            value={age}
            onChange={(e)=> setAge(e.target.value)}
          ></input>
          <input
            className="p-4 rounded-md ml-4 mr-4 mt-4"
            type="email"
            placeholder="Enter Your email"
            name="email"
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}           
          ></input>
          <button  className="p-4 rounded-md ml-4 mr-4 mt-4 bg-slate-500" onClick={handleClick}>Save Info</button>
          </div>
        
    </div>
  )
}

export default page