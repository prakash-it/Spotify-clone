import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route} from 'react-router-dom'
import AddSongs from './pages/AddSongs';
import AddAlbum from './pages/AddAlbum';
import ListSongs from './pages/ListSongs';
import ListAlbum from './pages/ListAlbum';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';

 export const url = 'http://localhost:5000'

export default function App() {
  return (
    <div className='flex items-start min-h-screen'>
   <ToastContainer/>
   <Sidebar/>
  
   <div className='flex-1 h-screen overflow-x-scroll bg-[#F3FFF6]'>
   <Nav/>
    <div className='pt-8 pl-5 sm:pt-12 sm-pl-12'>
    <Routes>
      <Route path='/add-songs' element={<AddSongs/>} />
      <Route path='/add-albums' element={<AddAlbum/>} />
      <Route path='/list-songs' element={<ListSongs/>} />
      <Route path='/list-albums' element={<ListAlbum/>} />
    </Routes>
    </div>
   </div>
    </div>
  )
}
