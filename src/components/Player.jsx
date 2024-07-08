import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate=useNavigate();
  return (
    
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[20%] rounded flex flex-col justify-around'>
        <div className='flex item-center gap-3 pl-8 cursor-pointer'>
                <img className="w-6" src={assets.spotify_logo} alt="" />
                <p className='font-bold'>Spotify</p>
            </div>
            <div onClick={()=>navigate('/')} className='flex item-center gap-3 pl-8 cursor-pointer mt-3'>
                <img className="w-6" src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex item-center gap-3 pl-8 cursor-pointer mt-3'>
                <img className="w-6" src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div> 
        <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className="w-8" src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex item-center gap-3'>
                    <img className='w-5'src={assets.arrow_icon} alt="" />
                    <img className='w-5'src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items items-start justify-start gap-1 pl-4'>
                    <h1>
                     Create Your First PlayList
                    </h1>
                    <p className='font-light'>it's easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white text=[15px] text-black rounded-full mt-4'>Create Playlist</button>

                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items items-start justify-start gap-1 pl-4 mt-5'>
                    <h1>
                     Let's Find Some Podcast to follow
                    </h1>
                    <p className='font-light'>we will keep you update on new episode</p>
                    <button className='px-4 py-1.5 bg-white text=[15px] text-black rounded-full mt-4'>Browse Podcast</button>

                </div>

        </div>
        
    </div>
  )
}

export default Sidebar
