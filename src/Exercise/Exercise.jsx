import React from 'react'
import dataex from '../assets/data'
import { Button } from "@/components/ui/button"
const Exercise = () => {
   
    
  return (
  <>  
  <div className=' m-8 flex justify-center text-center'>
    <input className='h-[50px] w-[500px]' placeholder='Search'/>
    <Button className="bg-red-700 m-2 h-14 w-14">Search</Button>
  </div>



  <div className=' grid grid-cols-4 gap-9  m-4'>
    {
        dataex.map((e)=>(
            <div  className='border border-box border-red-50 rounded-lg text-center flex flex-col m-auto'>
            <div className='text-5xl'>{e.name}</div>
            <img  className="m-3 w-[250px] rounded-lg "src={e.img}/>
            </div>
        ))
    }
  </div>
  </>
  )
}

export default Exercise