import React from 'react';
import { Routes, Route, NavLink, HashRouter, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Formulario from '../components/Formulario';
import ListaHabitos from '../components/ListaHabitos';
import { Header } from '../components/Header';

const Rutas = () => {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/Habit-Tracking/Home" />} />
                <Route path="/Habit-Tracking/" element={<Navigate to="/Habit-Tracking/Home" />} />
                <Route path='/Habit-Tracking/Home' element={<Home />} />
                <Route path='/Habit-Tracking/Formulario' element={<Formulario />} />
                <Route path='/Habit-Tracking/ListaHabitos' element={<ListaHabitos />} />
                <Route path="*" element={<Navigate to="/Habit-Tracking/Home" />} />
            </Routes>

            <nav className='fixed bottom-0 w-full flex justify-center'>
                <ul className='w-full max-w-4xl bg-slate-900 border-t-4 border-cyan-400 shadow-lg rounded-t-xl flex items-center'>
                    <li className='flex flex-row w-full justify-around p-2'>
                        <NavLink
                            className={({ isActive }) => 
                                `flex flex-col items-center p-2 transition-transform duration-300 transform ${isActive ? 'bg-cyan-400 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                            to='/Habit-Tracking/Home'>
                            <img src="./home.svg" alt="Inicio" style={{ width: '50px', height: '50px' }} />
                            <span className='text-xs mt-1'>Inicio</span>
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => 
                                `flex flex-col items-center p-2 transition-transform duration-300 transform ${isActive ? 'bg-cyan-400 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                            to='/Habit-Tracking/Formulario'>
                            <img src="./add.svg" alt="Agregar Hábito" style={{ width: '50px', height: '50px' }} />
                            <span className='text-xs mt-1'>Agregar</span>
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => 
                                `flex flex-col items-center p-2 transition-transform duration-300 transform ${isActive ? 'bg-cyan-400 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                            to='/Habit-Tracking/ListaHabitos'>
                            <img src="./search.svg" alt="Buscar Hábitos" style={{ width: '50px', height: '50px' }} />
                            <span className='text-xs mt-1'>Buscar</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </HashRouter>
    );
}

export default Rutas;
