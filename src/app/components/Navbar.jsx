'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const route = useRouter()
  return (
    <div className='flex justify-evenly items-center h-20 w-full bg-gray-600   '>
        <div>
            <Link className='text-2xl text-white' href={`/`}>Sanzid <span className='text-red-600'>Rahman</span></Link>
        </div>
        <div>
            <ul>
                <li className='flex space-x-3 '>
                    <Link className='text-white text-xl' href={`/addproduct`}>AddProduct</Link>
                    {/* <Link className='text-white text-xl' href={`/information`}>Information</Link> */}
                    <Link className='text-white text-xl' href={`/productlist`}>Product-List</Link>
                    <Link className='text-white text-xl' href={`/users`}>User</Link>
                    <Link className='text-white text-xl' href={`/adduser`}>Add-New-User</Link>
                    <Link className='text-white text-xl' href={`/userlist`}>User-List</Link>
                </li>
            </ul>
        </div>
        <div className='flex space-x-4 '>
            <button className='h-14 w-28 rounded-xl bg-slate-900 p-4 text-white ' onClick={()=> route.push("/login") }>Log in</button>
              <button className='h-14 w-28 rounded-xl bg-slate-900 p-4 text-white' onClick={()=> route.push("/signup") }>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar