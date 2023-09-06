'use client'
import { useEffect, useState } from "react"


const page = ({params : {id}}) => {
  
  const [name,setName] =useState('')
  // const [age,setAge] =useState('')
  const [email,setEmail] =useState('')

useEffect(()=>{
  const fetchData = async ()=>{
    let data = await fetch(`http://localhost:3000/api/user/${id}`)
    data = await data.json()
    const userData = data.results;
    setName(userData.name);
    setEmail(userData.email)
  }
fetchData()
} ,[])

async function handleClick(){
   let data = await fetch(`http://localhost:3000/api/user/${id}`,{
    method : "PUT",
    body : JSON.stringify({name,email})
   })
    data = await data.json()
    setName('')
    setEmail('')
  if ( data.success){
  alert("user Details up to date")
  }else{
 alert("please try a valid input")
  }
}

  return (
    <div>
      <div className="h-96 w-5/12 bg-slate-300 flex flex-col mt-4 absolute left-2/4 top-[150px] rounded-lg">
          <input
            className="p-4 rounded-md ml-4 mr-4 mt-4"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          ></input>
          {/* <input
            className="p-4 rounded-md ml-4 mr-4 mt-4"
            type="number"
            placeholder="Enter Your age"
            name="age"
            value={age}
            onChange={(e)=> setAge(e.target.value)}
          ></input> */}
           <input
            className="p-4 rounded-md ml-4 mr-4 mt-4"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          ></input>
           <button  className="p-4 rounded-md ml-4 mr-4 mt-4 bg-slate-500" onClick={handleClick}>Update your Info</button>
           
          </div>
    </div>
  )
}

export default page