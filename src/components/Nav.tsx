import React from 'react'
import { Toggle } from './Toggle'
import {BiBookAlt} from 'react-icons/bi'
import {FiSearch} from 'react-icons/fi'
import {CiDark} from 'react-icons/ci'

const Nav = () => {
     return(
          <div className='w-full h-36 flex flex-col items-center px-4 md:px-8 md:h-44'>
               <div className='max-w-3xl flex justify-between w-full h-1/2 lg:w-4/5'>
                    <figure className='w-full h-full flex items-center'>
                         <BiBookAlt className='text-5xl text-slate-600'/>
                    </figure>

                    <div className="h-full w-28 flex items-center justify-between md:w-24">
                         <Toggle/>
                         <CiDark className='text-3xl'/> 
                    </div>
               </div>



               <div className='w-full h-1/2 max-w-3xl flex items-center justify-center lg:w-4/5'>
                    <div className='rounded-3xl max-w-3xl bg-[#f8eeee] w-full h-3/4 flex items-center justify-center px-4 md:rounded-2xl'>
                         <input type="text" className='w-full h-full rounded-3xl bg-[#f8eeee] ' placeholder='Search'/>
                         <FiSearch className='text-2xl text-[#bd96d9]'/>
                    </div>
                    
               </div>
          </div>
     )
}

export {Nav}