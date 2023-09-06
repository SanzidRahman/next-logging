'use client'
const getUser = async () =>{
    let data = await fetch("http://localhost:3000/api/post");
    data = await data.json();
    return data.results

}

const page =async () => { 
    const data = await getUser()
    
  return (
    <div >
        <h1 className="text-center">userList Page</h1>
        <div className="flex justify-center">
        <table >
           <thead>
           <tr>
                <td  className="border border-slate-950 m-2 p-2">Name :</td>
                <td className="border border-slate-950 m-2 p-2">Age :</td>
                <td className="border border-slate-950 m-2 p-2">Email :</td>
            </tr>
           </thead>
           <tbody>
            { 
                data.map((item)=>{
                    return(
                        <tr key={item.id}>
                        <td  className="border border-slate-950 m-2 p-2">{item.name}</td>
                        <td className="border border-slate-950 m-2 p-2">{item.age}</td>
                        <td className="border border-slate-950 m-2 p-2">{item.email}</td>
                        </tr>
                    )
                })
            }
           </tbody>
        </table>
        </div>
    </div>
  )
}

export default page