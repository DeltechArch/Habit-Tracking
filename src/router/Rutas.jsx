import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import Formulario from '../components/Formulario'
import ListaHabitos from '../components/ListaHabitos'
import { Header } from '../components/Header'

const Rutas = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/Habit-Tracking/Home" />} />
                <Route path="/Habit-Tracking/" element={<Navigate to="/Habit-Tracking/Home" />} />
                <Route path='/Habit-Tracking/Home' element={<Home />} />
                <Route path='/Habit-Tracking/Formulario' element={<Formulario />} />
                <Route path='/Habit-Tracking/ListaHabitos' element={<ListaHabitos />} />
                <Route path="*" element={<Navigate to="/Habit-Tracking/Home" />} />

            </Routes>

            <nav className=' fixed bottom-0 w-full flex justify-center'>
                <ul className='w-72 border-4 border-cyan-400'>
                    <li className='flex flex-row justify-around bg-slate-900'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'bg-cyan-400' : ''}
                            to='/Habit-Tracking/Home' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => isActive ? 'bg-cyan-400' : ''}
                            to='/Habit-Tracking/Formulario'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => isActive ? 'bg-cyan-400' : ''}
                            to='/Habit-Tracking/ListaHabitos'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                        </NavLink>
                        


                    </li>

                </ul>
            </nav>


        </BrowserRouter>
    )
}

export default Rutas
