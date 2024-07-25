import React from 'react'
import logotipo from "../assets/logotipo.svg"

export const Header = () => {
  return (
    <>
    <header className='flex fixed top-0 w-full justify-evenly bg-slate-900 items-center border-b-8 border-cyan-400 '>
        <span><img className='w-20 h-20' src={logotipo} alt="logotipo" /></span>
        <div className=' flex text-3xl sm:text-4xl'>
            <p className='text-purple-700 mx-2'>Habit </p>
            <p className='text-red-700 mx-2'>tracking</p>
            <p className='text-cyan-400 mx-2'>?</p>
        </div>
        
    </header>
    </>
  )
}
