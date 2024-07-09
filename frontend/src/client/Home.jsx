import React, { useContext, useEffect, useState } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, LogIn, Navigation } from 'lucide-react'
import axios from 'axios'
// import UserContaxt from '../contaxt/Usercontaxt'
import { useNavigate } from 'react-router-dom'
import UserContaxt from '../contaxt/Usercontaxt'
// import { useNavigate, useNavigation } from 'react-router-dom'

export default function Home() {

  let[inp , setInp] = useState([])
  // console.log(inp)
  let {login} = useContext(UserContaxt)
  let navigation = useNavigate()

    let [data, setData] = useState([])

    useEffect(() => {
      fetchProductData()
    }, [])
  
    async function fetchProductData() {
      let result = await axios.get('http://localhost:3000/api/getProduct')
      console.log(result.data)
      setData(result.data)
    }


async function Addidas(){
  let result = await axios.get('http://localhost:3000/api/getProduct')
  let final = result.data.filter((item)=> item.productBrand == 'addidas')
  setData(final)
}
async function Zocky(){
  let result = await axios.get('http://localhost:3000/api/getProduct')
  let final = result.data.filter((item)=> item.productBrand == 'Zocky')
  setData(final)
}
async function Nvoba(){
  let result = await axios.get('http://localhost:3000/api/getProduct')
  let final = result.data.filter((item)=> item.productBrand == 'Nvoba')
  setData(final)
}
async function Nvidia(){
  let result = await axios.get('http://localhost:3000/api/getProduct')
  let final = result.data.filter((item)=> item.productBrand == 'Nvidia')
  setData(final)
}
async function All(){
  fetchProductData()
}

async function handleSearch(){
  let result = await axios.get(`http://localhost:3000/api/searchProduct/${inp}`)
  setData(result.data)
  console.log(result.data)
}
// hiring the add to cart 
// let { login } = useContext(UserContaxt)
  async function saveCart(data) {

    if (login) {
      let result = await axios.post(`http://localhost:3000/api/cartSave/${login}`, {
        productBrand: data.productBrand,
        productPrice: data.productPrice,
        productType: data.productType,
        productRating: data.productRating
      })

      if (result.data == true) {
        fetchCartData()
        alert("product saved into cart !")
      }
    } else {
      navigation('/clientlogin')
    }

  }


//cart length
let {setCount} = useContext(UserContaxt)

useEffect(()=>{
  fetchCartData()
},[])

async function fetchCartData(){
  let result = await axios.get(`http://localhost:3000/api/getCart/${login}`)
  setCount(result.data.length)
}
  return (
    <>  
      <aside className=" fixed flex h-screen w-64 flex-col overflow-y-auto border-r  px-5 py-8 z-90 top-[60px]">
     
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">

            {/*search  */}
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product By Type..." required
        onChange={(e)=>setInp(e.target.value)} 
        /> 
       
    </div>
</form>
<button className='p-2 bg-gray-200 rounded-[10px] text-xl font-bold hover:bg-gray-400 hover:text-white'
onClick={handleSearch}
>Search</button> <br />
{/*  */}
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">analytics</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Sales</span>
            </a>
          </div>
          <div onClick={All} className="space-y-3 px-3 text-xs font-semibold uppercase text-gray-900 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">All</label>
        
          </div>
          <div onClick={Addidas} className="space-y-3 px-3 text-xs font-semibold uppercase text-gray-900 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900"> addidas</label>
        
          </div>
          <div onClick={Zocky} className="space-y-3 px-3 text-xs font-semibold uppercase text-gray-900 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900"> Zocky</label>
        
          </div>
          <div onClick={Nvoba} className="space-y-3 px-3 text-xs font-semibold uppercase text-gray-900 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">Nvoba</label>
        
          </div>
          <div onClick={Nvidia} className="space-y-3 px-3 text-xs font-semibold uppercase text-gray-900 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">Nvidia</label>
        
          </div>
  
        </nav>
        <div className="mt-6">
          <div className="rounded-lg bg-gray-100 p-3 ">
            <h2 className="text-sm font-medium text-gray-800">New feature availabel!</h2>
            <p className="mt-1 text-xs text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi
              velit.
            </p>
            <img
              className="mt-2 h-32 w-full rounded-lg object-cover"
              src={`http://localhost/3000/${data.Image}`}
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <a href="#" className="flex items-center gap-x-2">
              <img
                className="h-7 w-7 rounded-full object-cover"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="avatar"
              />
              <span className="text-sm font-medium text-gray-700">Dan Abromov</span>
            </a>
            <a
              href="#"
              className="rotate-180 text-gray-800 transition-colors duration-200 hover:text-gray-900"
            >
              <LogIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
    {/* cart material  */}
    <div className='relative  left-[300px] top-[70px] flex justify-evenly w-[1000px] flex-wrap '>
    {data.map((data)=>(
        <div className="w-[300px] rounded-md border  top-[30px]">
        <img
        src={`http://localhost:3000/${data.Image}`}


          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">Product Brand:- {data.productBrand}</h1>
          <h1 className="inline-flex items-center text-lg font-semibold">Product Type:- {data.productType}</h1>
          <h1 className="inline-flex items-center text-lg font-semibold">Product Price:- {data.productPrice}</h1>
          <h1 className="inline-flex items-center text-lg font-semibold">Product Rating:- {data.productRating}</h1>
          
          <button
            type="button"
            onClick={()=>saveCart(data)} 
            // {console.log(data)}
            
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add To Cart
            
          </button>
        </div>
      </div>
    ))}
    </div>
   </>
  )

}
    
    

