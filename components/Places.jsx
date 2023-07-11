import React from 'react'
import Tags from './Tags'
import PlaceList from './PlaceList'

const Places = () => {
  return (
    <div className='flex flex-col gap-8 p-8'>
        <div className='flex items-center justify-center p-5 gap-2 flex-wrap'>
          <Tags tag="Africa"/>
          <Tags tag="Asia"/>
          <Tags tag="Europe"/>
          <Tags tag="Australia"/>
          <Tags tag="North America"/>
        </div>
        <div className='flex flex-col justify-center'>
          <PlaceList />
        </div>
    </div>
  )
}

export default Places