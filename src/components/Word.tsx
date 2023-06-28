import React from 'react'
import {ImPlay3} from 'react-icons/im'

const Word = () => {
     return(
          <div className='w-full h-20 flex justify-between items-center px-2'>
               <div className='h-full w-1/2 flex flex-col content-center justify-center'>
                    <h1 className='font-bold text-3xl'>keyboard</h1>
                    <p className='text-[#a645ef]'>/ˈkiːbɔːd/</p>
               </div>
               <figure className='bg-[#eacffc] h-11 w-11 rounded-full flex items-center justify-center cursor-pointer'>
                    <ImPlay3 className='text-[#a645ef]'/>
               </figure>
          </div>
     )
}

export {Word}