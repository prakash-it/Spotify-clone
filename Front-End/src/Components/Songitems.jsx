import React from 'react'
import { useContext } from 'react'
import { Playercontext } from '../context/Playercontext'

export default function Songitems({name, image, desc, id}) {
  
const {playWithId} =useContext(Playercontext)

  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} className='rounded' alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
         <p className='text-slate-200 text-sm '>{desc}</p>
    </div>
  )
}
