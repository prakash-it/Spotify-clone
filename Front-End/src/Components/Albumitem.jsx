import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Albumitem({image, name, desc, id }) {
  
  const naviagte = useNavigate()
  
  return (
    <div onClick={()=>naviagte(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
     <img src={image} className='rounded' alt="" />
     <p className='font-bold mt-2 mb-1'>{name}</p>
     <p className='text-slate-200 text-sm' >{desc}</p>
    </div>
  )
}
