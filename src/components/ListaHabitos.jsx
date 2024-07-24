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
    <div className='  flex flex-col  text-center mb-28 mt-24'>
      <ul className='space-y-2 w-60 mx-auto'>

        {habitosGuardados.length > 0 ? (habitosGuardados.map((habito, index) => (
          <li
            key={habito.id}
            className="  bg-slate-900 shadow-slate-600 shadow-xl rounded-xl flex justify-between items-center flex-col h-80 px-3"
          >
            <p className=" bg-black text-cyan-400 text-xl w-1/3 border border-cyan-400 mt-2">Nº {index + 1}</p>


            <p className=" text-2xl uppercase text-purple-700 font-black border-b-8 border-cyan-400"> {habito.habito}</p>


            <div className=" flex flex-col items-center ">
              <div className={`flex flex-col items-center justify-center p-4 rounded-full w-40 h-40 ${habito.contador >= 30 ? 'bg-cyan-400' : 'bg-black'}`}>
                <p className={`text-7xl ${habito.contador >= 30 ? 'text-black' : 'text-cyan-400'}`}>{habito.contador}  </p>
                <p className={`${habito.contador >= 30 ? 'text-black' : 'text-cyan-400'}`}>dias completados</p>

              </div>

              <div className=" flex">
                <button
                  onClick={() => incrementarContador(habito.id)}//le pasamos el id a la funcion
                  className="bg-cyan-400 w-full p-2 m-4"
                >
                  agregar
                </button>

                <button
                  onClick={() => eliminarHabito(habito.id)}//le pasamos el id a la funcion
                  className=" bg-red-700 p-2 w-full m-4"
                >
                  Eliminar
                </button>
              </div>
            </div>



          </li>

        ))
        ) : (
          <>
            <div className=" bg-slate-900 p-2 rounded-xl shadow-slate-600 shadow-xl">

              <li className=" text-3xl text-purple-700 ">No tienes hábitos guardados  </li>
              <Link to="/Formulario" className=" text-4xl   text-cyan-400  rounded-lg p-2 mt-2">Empieza a crear</Link>
            </div>

          </>

        )}
      </ul>
    </div>
  );
};

export default ListaHabitos;
