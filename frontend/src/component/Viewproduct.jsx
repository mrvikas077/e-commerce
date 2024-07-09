import React, { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function Viewproduct() {

    let [data,setData] = useState([])
     let {id} = useParams()
     useEffect(()=>{
      getProductById()
     },[])

     async function getProductById(){
        let result = await axios.get(`http://localhost:3000/api/getProductById/${id}`)
        // console.log(result)
        setData(result.data)
     }
     
  return (
   <>
   <div>
    {data.map((data)=>(
       <div className="w-[300px] rounded-md border">
       <img
         src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
         alt="Laptop"
         className="h-[200px] w-full rounded-t-md object-cover"
       />
       <div>
       <h1 className="text-lg font-semibold">Product Brand:- <span className='text-bold text-2xl'>{data.productBrand}</span></h1>
            <h1 className="text-lg font-semibold">Product Type:- <span className='text-bold text-2xl'>{data.productType}</span></h1>
            <h1 className="text-lg font-semibold">Product Price:- <span className='text-bold text-2xl'>{data.productPrice}</span></h1>
            <h1 className="text-lg font-semibold">Product Rating:- <span className='text-bold text-2xl'>{data.productRating}</span></h1>
         <button
           type="button"
           className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
         >
           Read
         </button>
       </div>
     </div>
    ))}
   </div>
   </>
  )
}
