import getUser from "@/app/components/getUser";

const page =async ({params : {id}}) => {
    const data =await getUser(id)
    const user =data.results;
   
  return (
    <div className="h-40 w-1/3 bg-slate-600 translate-x-[350px] rounded-xl shadow-2xl pl-5 pt-4 mt-12 text-white">
       <h1>Name :{user.name}</h1>
       <h1>Age :{user.age}</h1>
       <h1>Email :{user.email}</h1>
       <h1>Location :{user.location}</h1>
    </div>
  )
}

export default page