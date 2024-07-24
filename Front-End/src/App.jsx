import React, { useContext } from 'react'
import Sidebars from './Components/Sidebars'
import Player from './Components/Player'
import Display from './Components/Display'
import { Playercontext } from './context/Playercontext'


export default function App() {
  
  const{audioRef,track} = useContext(Playercontext)
  
  
  
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
      <Sidebars/>
      <Display/>
      </div>
      <Player/>
      <audio preload='auto' ref={audioRef} src={track.file}></audio>
    </div>
  )
}
