import React from 'react'

const Tags = ({tag}) => {
  return (
    <div className='bg-white ring-1 ring-[#ccc] w-[fit-content] py-2 px-4 rounded-full text-sm text-[#818181] hover:shadow-lg cursor-pointer'>
        <p>{tag}</p>
    </div>
  )
}

export default Tags