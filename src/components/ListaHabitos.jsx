import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const ListaHabitos = () => {
  // Definir el estado inicial para almacenar los hábitos guardados
  const [habitosGuardados, setHabitosGuardados] = useState([]);
  // Efecto que se ejecuta una vez al montar el componente
  useEffect(() => {
    // Recuperar los datos almacenados en localStorage
    const recuperarDatos = JSON.parse(localStorage.getItem('habitos'));
    // Si hay datos guardados, actualiza el estado con estos datos
    if (recuperarDatos) {
      setHabitosGuardados(recuperarDatos);
    }
  }, []);// El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  const eliminarHabito = (id) => {
    // Confirmar con el usuario si realmente desea eliminar el hábito de forma permanente
    const deletePermanente = confirm('Se Eliminara de forma Permanente')
    if (!deletePermanente) {
      return;// Salir si el usuario no confirma la eliminación
    }
    // Iterar sobre la lista de hábitos y devolver la lista excluyendo el hábito con el ID proporcionado
    const nuevosHabitos = habitosGuardados.filter(habito => habito.id !== id);
    // Actualizar el estado con la nueva lista de hábitos (sin el hábito eliminado)
    setHabitosGuardados(nuevosHabitos);
    // Guardar la nueva lista de hábitos en localStorage
    localStorage.setItem('habitos', JSON.stringify(nuevosHabitos));
  };

  const incrementarContador = (id) => {
    // Preguntar al usuario si está seguro que  completo el día
    const diaCompletado = confirm('¿Realmente has completado tu dia?');
    if (!diaCompletado) {
      return; // Salir si el usuario no confirma
    }
    // Iterar sobre la lista de hábitos y, en cada iteración, 
    // comprobar si el ID coincide con el ID proporcionado.
    // Si coincide, aumentar el contador; de lo contrario, 
    // devolver el hábito tal y como está.

    const habitosIncrementando = habitosGuardados.map(habito =>
      habito.id === id ? { ...habito, contador: habito.contador + 1 } : habito
    );
    // Actualizar el estado con la nueva lista de hábitos
    setHabitosGuardados(habitosIncrementando);
    // Guardar la nueva lista de hábitos en localStorage
    localStorage.setItem('habitos', JSON.stringify(habitosIncrementando));

  };




  return (
    <div className='flex flex-col text-center mb-28 mt-48'>
      <ul className='space-y-6 w-80 mx-auto'>
        {habitosGuardados.length > 0 ? (
          habitosGuardados.map((habito, index) => (
            <li
              key={habito.id}
              className="bg-slate-800 shadow-lg shadow-slate-700 rounded-xl flex flex-col items-center p-6 space-y-4 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-cyan-500 border border-transparent"
            >
              <p className="bg-cyan-500 text-black text-lg px-4 py-1 rounded-full border border-cyan-300">
                Nº {index + 1}
              </p>

              <p className="text-xl uppercase text-purple-400 font-semibold border-b-2 border-cyan-400 pb-2">
                {habito.habito}
              </p>

              <div className="flex flex-col items-center space-y-4">
                <div className={`flex flex-col items-center justify-center p-6 rounded-full w-40 h-40 ${habito.contador >= 30 ? 'bg-cyan-500' : 'bg-gray-800'} transition-colors duration-300 border-4 ${habito.contador >= 30 ? 'border-cyan-600' : 'border-gray-600'}`}>
                  <p className={`text-6xl font-bold ${habito.contador >= 30 ? 'text-black' : 'text-cyan-400'} transition-colors duration-300`}>
                    {habito.contador}
                  </p>
                  <p className={`text-base ${habito.contador >= 30 ? 'text-black' : 'text-cyan-400'} transition-colors duration-300`}>
                    días completados
                  </p>
                </div>


                <div className="flex space-x-3">
                  <button
                    onClick={() => incrementarContador(habito.id)}
                    className="bg-cyan-500 text-white w-24 p-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-cyan-400 shadow-md hover:shadow-lg"
                  >
                    Agregar
                  </button>

                  <button
                    onClick={() => eliminarHabito(habito.id)}
                    className="bg-red-600 text-white w-24 p-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-red-500 shadow-md hover:shadow-lg"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div className="bg-slate-800 p-4 rounded-xl shadow-lg shadow-slate-700 border border-transparent transition-transform transform hover:scale-105 hover:border-cyan-500">
            <p className="text-2xl text-purple-400 mb-2">No tienes hábitos guardados</p>
            <Link to="/Habit-Tracking/Formulario" className="text-3xl text-cyan-400 rounded-lg p-2 mt-2 inline-block bg-slate-700 hover:bg-slate-600 transition-colors duration-300">
              Empieza a crear
            </Link>
          </div>
        )}
      </ul>
    </div>



  );
};

export default ListaHabitos;
