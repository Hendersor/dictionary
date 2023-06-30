import React from 'react'
import {ImPlay3} from 'react-icons/im'

const Word = () => {
     return(
          <div className='w-full h-20 max-w-3xl flex justify-between items-center px-4 md:px-8 md:my-10 lg:w-4/5 lg:h-28 lg:my-10 lg:mx-auto'>
               <div className='h-full w-1/2 flex flex-col content-center justify-center'>
                    <h1 className='font-bold text-3xl md:text-6xl md:my-3'>keyboard</h1>
                    <p className='text-[#a645ef] md:text-2xl'>/ˈkiːbɔːd/</p>
               </div>
               <figure className='bg-[#eacffc] h-11 w-11 rounded-full flex items-center justify-center cursor-pointer md:h-20 md:w-20'>
                    <ImPlay3 className='text-[#a645ef] md:text-3xl'/>
               </figure>
          </div>
     )
}

export {Word}