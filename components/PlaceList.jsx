"use client"
import { CalendarMonthOutlined, LocationOn, ThumbUp, ThumbUpAltOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const PlaceList = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

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

  const handleLike = () => {
    setLiked((prevState) => !prevState);
  };

  // show rating
  const showRating = (rating) => {
    const stars = []

    for(let i = 0; i < rating; i++){
      stars.push(<span key={i}>⭐</span>)
    }

    return stars
  }

  return (
    <div className='flex gap-3 flex-wrap justify-center'>
      {loading ? <Image width={100} height={100} alt='loading anim' src='/loading.gif'/> : places.map((place) => (
        <div key={place.id} className='bg-white p-5 rounded w-[95%] md:w-[300px] flex flex-col justify-between'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold text-lg'>{place.name}</h1>
            <p>{place.desc}</p>
          </div>
          <div className='flex flex-col gap-2 mt-3'>
            <div className='flex items-center gap-1 text-sm text-[#818181]'>
              <LocationOn />
              <p>{place.location}</p>
            </div>
            <div className='flex items-center gap-1 text-sm text-[#818181]'>
              <CalendarMonthOutlined />
              <p>{place.dateCreated}</p>
            </div>
            <div className='flex items-center justify-between mt-3'>
              <div className='flex items-center gap-1 text-[mediumseagreen] cursor-pointer'>
                <div onClick={handleLike}>
                  {
                    liked ? <ThumbUp /> : <ThumbUpAltOutlined />
                  }
                </div>
                <p>{place.likes}</p>
              </div>
              <div>
                {showRating(place.rating)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceList;
