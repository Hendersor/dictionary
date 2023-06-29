import React from 'react'
import {BiBookAlt} from 'react-icons/bi'
import {FiSearch} from 'react-icons/fi'

const Nav = () => {
     return(
          <div className='w-full h-36 flex flex-col  items-center px-4'>
               <div className='flex justify-between w-full h-1/2'>
                    <figure className='w-full h-full flex items-center'>
                         <BiBookAlt className='text-5xl text-slate-600'/>
                    </figure>
               </div>



               <div className='w-full h-1/2 flex items-center justify-center'>
                    <div className='rounded-3xl bg-[#f8eeee] w-full h-3/4 flex items-center justify-center px-4'>
                         <input type="text" className='w-full h-full rounded-3xl bg-[#f8eeee] ' placeholder='Search'/>
                         <FiSearch className='text-2xl text-[#bd96d9]'/>
                    </div>
                    
               </div>
          </div>
     )
}

export {Nav}