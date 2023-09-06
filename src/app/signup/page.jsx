
const page = () => {
  return (
    <div className="h-[450px] w-[600px] bg-slate-400 absolute left-[400px] mt-10 rounded-xl">
    <h1 className="text-center text-2xl mt-2">Sign Up</h1>
    <hr className="mt-4"></hr>
      <form className="flex flex-col mt-8 ml-6 mr-4">
        <div className="flex">
          <input className="p-2 rounded-md ml-4 mt-4 h-10 w-[255px]"  type="text" placeholder="Enter Your FIrstName"></input>
          <input className="p-2 rounded-md ml-4  mt-4  h-10 w-[255px]" type="text" placeholder="Enter Your LastName"></input>
        </div>


        <input className="p-2 rounded-md ml-4 mr-4 mt-4" type="email" placeholder="Enter Your Email"></input>
        <input className="p-2 rounded-md ml-4 mr-4 mt-4" type="password" placeholder="Enter Your Password"></input>


       <div className="flex flex-col">
        <div className="ml-6 mt-4"><p>Gender</p></div>
        <div className="flex justify-">
          <div className="border flex justify-between border-gray-950 p-2 h-[40px] w-[165px] ml-4 bg-white rounded-lg"> <label > Male :</label><input className="rounded-md" type="radio"></input></div>
          <div className="border flex justify-between border-gray-950 p-2 h-[40px] w-[165px] ml-4 bg-white rounded-lg"> <label > Female :</label><input className="rounded-md" type="radio"></input></div>
          <div className="border flex justify-between border-gray-950 p-2 h-[40px] w-[165px] ml-4 bg-white rounded-lg"> <label > Custom :</label><input className="rounded-md" type="radio"></input></div>
        </div>
       </div>
       <button className="p-2 rounded-md ml-4 mr-4 mt-4 bg-lime-950" type=" submit">Sign up</button>
      </form>
    </div>
  )
}

export default page