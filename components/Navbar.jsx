"use client"
import { DarkModeOutlined, LightModeOutlined, LocationOn, SearchOutlined } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'

const Navbar = () => {

  const [lightMode, setLightMode] = useState(false);
  const [outline, setOutline] = useState(false);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleMode = () => {
    setLightMode((prevState) => !prevState);
  }

  const handleOutline = () => {
      setOutline(true)
  }

  const getPlaces = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const response = await fetch("http://localhost:1000/api/v1/places", requestOptions);
      const data = await response.json();

      setPlaces(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching places:', error);
    }
  };

  useEffect(() => {
    getPlaces();
  }, []);

  useEffect(() => {
    getPlaces()
  },[])

  return (
    <div className='h-[60vh] p-11 text-white flex flex-col gap-10 justify-evenly' id='nav'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold'>Placify</h1>
          <div onClick={handleMode} className='cursor-pointer'>
            {
              lightMode ? <DarkModeOutlined /> : <LightModeOutlined />
            }
          </div>
        </div>
        <div className='flex items-center flex-col justify-center gap-5'>
          <h1 className='font-bold md:text-6xl md:w-[60%] text-4xl text-center'>Let's take a trip to {loading ? '' : places.length} beautiful places today!</h1>
          <form action="" className='md:w-[55%]'>
            <div onFocus={handleOutline} className={`flex items-center text-center justify-between p-3 rounded-md ${outline ? 'ring-1 ring-white bg-tranparent text-white': 'bg-white text-[#818181]'}`}>
                <div className='flex items-center gap-2 w-full'>
                  {/* <SearchOutlined/> */}
                  <LocationOn />
                  <input type="text" placeholder='Search a place...' className='bg-transparent outline-none w-full'/>
                </div>
                <div onFocus={handleOutline}></div>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Navbar