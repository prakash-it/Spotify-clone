import React, { useState, useEffect } from 'react';
import { assets } from '../assets/admin-assets/assets';
import axios from 'axios'
import { url } from '../App';
export default function AddSongs() {
    const [image, setImage] = useState(null);
    const [song, setSong] = useState(null);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState('');
    const [album, setAlbum] = useState('none');
    const [loading, setLoading] = useState(false);
    const [albumdata, setAlbumdata] = useState([]);

    // useEffect(() => {
    //     // Simulating fetching album data from an API or some source
    //     setTimeout(() => {
    //         const mockAlbumData = [
    //             { id: 1, name: 'Album A' },
    //             { id: 2, name: 'Album B' },
    //             { id: 3, name: 'Album C' }
    //         ];
    //         setAlbumdata(mockAlbumData);
    //         setLoading(false); // Set loading to false once data is fetched
    //     }, 2000); // Simulating a delay of 2 seconds for loading
    // }, []);

    
    const submit = async (e) => {
        e.preventDefault();
       try{
           const formData = new FormData()

           formData.append('name',name)
           formData.append('desc',desc)
           formData.append('image',image)
           formData.append('audio',song)
           formData.append('album',album)

           const response = await axios.post(`${url}/song/add`,formData)
       }catch(error){

       }
    };

    return loading ? (
        <div className='grid place-items-center min-h-[80vh]'>
            <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'></div>
        </div>
    ) : (
        <form onSubmit={submit} className='flex flex-col items-start gap-8 text-gray-600'>
            <div className='flex gap-8'>
                <div className='flex flex-col gap-4'>
                    <p>Upload Song</p>
                    <input onChange={(e) => setSong(e.target.files[0])} type="file" id='song' accept='audio/*' hidden />
                    <label htmlFor='song'>
                        <img src={song ? assets.upload_added : assets.upload_song} className='w-24 cursor-pointer' alt='Upload Song' />
                    </label>
                </div>
                <div className='flex flex-col gap-4'>
                    <p>Upload Image</p>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" accept='image/*' hidden />
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-24 cursor-pointer' alt="" />
                    </label>
                </div>
            </div>

            <div className='flex flex-col gap-2.5'>
                <p>Song name</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type Here' required />
            </div>

            <div className='flex flex-col gap-2.5'>
                <p>Song description</p>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type Here' required />
            </div>

            <div className='flex flex-col gap-2.5'>
                <p>Album</p>
                <select value={album} onChange={(e) => setAlbum(e.target.value)} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]'>
                    <option value="none">Select an album</option>
                    {albumdata.map((albumItem) => (
                        <option key={albumItem.id} value={albumItem.id}>{albumItem.name}</option>
                    ))}
                </select>
            </div>

            <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>ADD</button>
        </form>
    );
}
