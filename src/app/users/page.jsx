import Link from "next/link"
import getusers from "../components/getusers"

const page =async () => {
   const data = await getusers()
   const user = data.result
   console.log(user)
  return (
    <div>
        <h1 className="h-10 w-full bg-stone-700 text-center items-center">This is Users Page</h1>
       <div className="flex justify-evenly mt-12">
       {
            user.map((item)=>{
                return(
                    <ul  key={item.id} className=" flex ">
                        <li className="flex justify-between items-center h-9 w-48 bg-slate-400 my-2 rounded-lg ">
                           
                            <Link className="mr-6 pl-2 " href={`/users/${item.id}`}>{item.name}</Link>
                            <Link className="mr-6 bg-red-400 p-1 rounded-md " href={`/users/${item.id}/update`}>Edit</Link>
                           
                        </li>
                    </ul>
                )
            })
        }
       </div>
    </div>
  )
}

export default page