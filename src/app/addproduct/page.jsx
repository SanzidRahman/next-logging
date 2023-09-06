'use client'

import { useState } from "react"

const page = () => {
    const [name,setName] = useState('')
    const [brand,setBrand] = useState('')
    const [price,setPrice] = useState('')
    const [origin,setOrigin] = useState('')


async function handleClick(){
   let data =  await fetch("http://localhost:3000/api/products",{
    method : "post",
    body : JSON.stringify({name,brand,price,origin})
   });
   data = await data.json()
   console.log(data) ;
   setName('');
   setBrand('');
   setPrice('');
   setOrigin('');
   console.log(data)
   if (data.success){
  alert("New Product has been addeed")
   }else{
  alert("some Errors has been occourd")
   }
 }



  return (
    
<div>
    
         <div className="h-[450px] w-1/2  bg-slate-300 flex flex-col mt-4 absolute left-1/4 top-[120px] rounded-lg">

            <h1 className="text-center mt-4 text-xl"> Add New Products</h1>
          <input
            className="p-4 rounded-md ml-5 mr-6 mt-8 "
            type="text"
            placeholder="Enter product Name"
            name="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          ></input>
           <input
            className="p-4 rounded-md ml-5 mr-6 mt-4 "
            type="text"
            placeholder="Enter Product Brand"
            name="brand"
            value={brand}
            onChange={(e)=> setBrand(e.target.value)}
          ></input>
          <input
            className="p-4 rounded-md ml-5 mr-6 mt-4 "
            type="number"
            placeholder="Enter Product price"
            name="price"
            value={price} 
            onChange={(e)=> setPrice(e.target.value)}           
          ></input>
          <input
            className="p-4 rounded-md ml-5 mr-6 mt-4 "
            type="text"
            placeholder="Enter Product Origin"
            name="origin"
            value={origin} 
            onChange={(e)=> setOrigin(e.target.value)}           
          ></input>
          <button  className="p-4 rounded-md ml-5 mr-6 mt-4  bg-slate-500" onClick={handleClick}>Save Info</button>
        </div>

    </div>
         


   
  )
}

export default page