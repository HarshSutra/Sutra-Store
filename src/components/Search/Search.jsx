import React from 'react'

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px]'>
      <input type='text' placeholder='search products...' className='w-full h-[35px]
      focus:outline-none bg-inherit'/>
    </div>
  )
}

export default Search