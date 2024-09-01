import React from 'react'
import logotipo from "../assets/logotipo.svg"

export const Header = () => {
  return (
    <>
      <header className='flex fixed top-0 w-full justify-center bg-black items-center border-b-8 p-2 border-cyan-400 z-50'>
        <div className='flex  border-4 border-white  p-4 bg-gradient-to-r from-cyan-400 to-blue-800 rounded-md'>
          <span><img className='w-20 h-20' src={logotipo} alt="logotipo" /></span>
          <div className='flex text-3xl sm:text-4xl ml-4 drop-shadow-md shadow-md bg-gradient-to-r from-slate-800 to-black'>
            <p className='text-purple-700 mx-2'>Habit</p>
            <p className='text-red-700 mx-2'>tracking</p>
            <p className='text-cyan-400 mx-2'>?</p>
          </div>
        </div>
      </header>


    </>
  )
}
