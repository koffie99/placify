"use client"
import { DarkModeOutlined, LightModeOutlined, SearchOutlined } from '@mui/icons-material'
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
          <div onClick={handleMode} className='cursor-pointer bg-[#183642] p-3 rounded-full'>
            {
              lightMode ? <DarkModeOutlined /> : <LightModeOutlined />
            }
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5'>
          <h1 className='font-bold text-4xl text-center'>Let's take a trip to {loading ? '' : places.length} beautiful places today!</h1>
          <form action="" className='flex items-center justify-center'>
            <div className={`p-3 rounded-md bg-white flex items-center justify-between w-full md:w-[50%] ${outline ? 'bg-transparent ring-1 ring-white text-white' : 'bg-white'}`} onFocus={handleOutline}>
              <input type="text" placeholder='Search Pacify...' className={`outline-none w-[80%] md:w-[100%] ${outline ? 'bg-transparent' : 'bg-white'}`} onFocus={handleOutline}/>
              <SearchOutlined className='text-[#818181]'/>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Navbar