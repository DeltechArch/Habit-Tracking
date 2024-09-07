import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListaHabitos = () => {
  const [habitosGuardados, setHabitosGuardados] = useState([]);

  useEffect(() => {
    const recuperarDatos = JSON.parse(localStorage.getItem('habitos'));
    if (recuperarDatos) {
      setHabitosGuardados(recuperarDatos);
    }
  }, []);

  const eliminarHabito = (id) => {
    const deletePermanente = confirm('Se Eliminara de forma Permanente');
    if (!deletePermanente) {
      return;
    }
    const nuevosHabitos = habitosGuardados.filter(habito => habito.id !== id);
    setHabitosGuardados(nuevosHabitos);
    localStorage.setItem('habitos', JSON.stringify(nuevosHabitos));
  };

  const incrementarContador = (id) => {
    const diaCompletado = confirm('¿Realmente has completado tu día?');
    if (!diaCompletado) {
      return;
    }
    const habitosIncrementando = habitosGuardados.map(habito =>
      habito.id === id ? { ...habito, contador: habito.contador + 1 } : habito
    );
    setHabitosGuardados(habitosIncrementando);
    localStorage.setItem('habitos', JSON.stringify(habitosIncrementando));
  };

  return (
    <div className='flex flex-col  text-center mb-16 mt-48 px-4'>
      <ul className='space-y-6 w-full max-w-md mx-auto'>
        {habitosGuardados.length > 0 ? (
          habitosGuardados.map((habito, index) => (
            <li
              key={habito.id}
              className="bg-slate-800 shadow-lg shadow-slate-700 rounded-xl border border-transparent"
            >
              <div className='grid grid-cols-1 gap-4 p-1 '>

                <div className='flex flex-col items-center justify-center'>
                  <p className="bg-cyan-500 text-black text-sm sm:text-lg px-3 sm:px-4 py-1 rounded-full border border-cyan-300">
                    Nº {index + 1}
                  </p>
                  <p className="text-sm uppercase text-purple-400 font-semibold border-b-2 border-cyan-400 pb-2">
                    {habito.habito}
                  </p>
                </div>


                <div className="grid grid-cols-2">

                  <div className='flex items-center justify-center'>
                    <div className={`flex flex-col items-center justify-center p-4 rounded-full w-20 h-20 ${habito.contador >= 30 ? 'bg-cyan-500' : 'bg-gray-800'} transition-colors duration-300 border-4 ${habito.contador >= 30 ? 'border-cyan-600' : 'border-gray-600'}`}>
                      <p className={`text-4xl font-bold ${habito.contador >= 30 ? 'text-black' : 'text-cyan-400'} transition-colors duration-300`}>
                        {habito.contador}
                      </p>
                      <p className={`text-sm ${habito.contador >= 30 ? 'text-black' : 'text-cyan-400'} transition-colors duration-300`}>
                        días
                      </p>
                    </div>
                  </div>

                  <div className='flex  space-x-2 text-xs p-2 justify-center items-center'>
                    <button
                      onClick={() => incrementarContador(habito.id)}
                      className="bg-cyan-500 text-black  p-1  transition-transform transform hover:scale-105 hover:bg-cyan-400 shadow-md hover:shadow-lg"
                    >
                    <img src="./add.svg" alt="boton de agregar" style={{width:'40px'}} />
                    </button>

                    <button
                      onClick={() => eliminarHabito(habito.id)}
                      className="bg-red-600 text-black  p-1  transition-transform transform hover:scale-105 hover:bg-red-500 shadow-md hover:shadow-lg"
                    >
                      <img src="./cancel.svg" alt=" boton de eliminar" style={{width:'40px'}} />
                    </button>
                  </div>




                </div>

              </div>
            </li>
          ))
        ) : (
          <div className="bg-slate-800 p-4 rounded-xl shadow-lg shadow-slate-700 border border-transparent transition-transform transform hover:scale-105 hover:border-cyan-500">
            <p className="text-xl sm:text-2xl text-purple-400 mb-2">No tienes hábitos guardados</p>
            <Link to="/Habit-Tracking/Formulario" className="text-2xl sm:text-3xl text-cyan-400 rounded-lg p-2 mt-2 inline-block bg-slate-700 hover:bg-slate-600 transition-colors duration-300">
              Empieza a crear
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ListaHabitos;
