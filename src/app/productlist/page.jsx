'use client'
async function getProduct(){
  let data = await fetch("http://localhost:3000/api/products")
  data = await data.json()
  return data;
}
const page =async () => {
  let data = await getProduct()
  const products = await data.results;

 
  return (
    <div>
        <h1>This is product Page</h1>
       <div className="flex justify-center">
       <table>
          <thead>
            <tr>
              <td  className="border border-slate-950 m-2 p-2">Name :</td>
              <td  className="border border-slate-950 m-2 p-2">Brand :</td>
              <td  className="border border-slate-950 m-2 p-2">Price :</td>
              <td  className="border border-slate-950 m-2 p-2">Origin :</td>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product)=>{
                return(
                  <tr>
                    <td  className="border border-slate-950 m-2 p-2">{product.name}</td>
                    <td  className="border border-slate-950 m-2 p-2">{product.brand}</td>
                    <td  className="border border-slate-950 m-2 p-2">{product.price}</td>
                    <td  className="border border-slate-950 m-2 p-2">{product.origin}</td>
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