import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const Formulario = () => {

  // Estado inicial con datos de localStorage o se inicia con []
  const [habitos, setHabitos] = useState(() => {
    // Intentar recuperar los hábitos guardados de localStorage
    const habitosGuardados = localStorage.getItem('habitos');
    // Si hay datos guardados, convertirlos de JSON a un array y usarlo como estado inicial
    // De lo contrario, iniciar con un array vacío
    return habitosGuardados ? JSON.parse(habitosGuardados) : [];
  });

  // Sincroniza el estado con localStorage al cambiar
  useEffect(() => {
    // Guardar el estado de 'habitos' en localStorage cada vez que cambie
    localStorage.setItem('habitos', JSON.stringify(habitos));
  }, [habitos]);// Dependencia: solo se ejecuta cuando 'habitos' cambia

  // Inicializa useNavigate para redirección
  const navigate = useNavigate();
  // Inicializa la referencia para el input de hábitos
  const nombreHabitos = useRef(null);

  // Manejo del formulario
  const handleSubmit = (e) => {
    e.preventDefault();// Evita el comportamiento predeterminado del formulario
    // Obtiene el valor del input y elimina espacios innecesarios
    const newHabito = nombreHabitos.current.value.trim();
    if (newHabito === '') {
      return; // Si el input está vacío, no realiza ninguna acción
    }
    // Confirma con el usuario antes de crear un nuevo hábito
    const confirmacion = confirm('¿Estás seguro de que quieres crear este hábito?');
    if (!confirmacion) {
      return; // Si el usuario cancela, no hace nada
    }
    // Crea un nuevo objeto de hábito
    const habitoACrear = {
      id: new Date().getTime().toString(),// Genera un ID único basado en la fecha actual
      habito: newHabito,// Nombre del nuevo hábito usando su referencia
      contador: 0 // Contador inicializado en 0
    };
    // Actualiza el estado de los hábitos con el nuevo hábito agregado
    setHabitos((prevHabitos) => [...prevHabitos, habitoACrear]);
    // Limpia el input después de agregar el hábito
    nombreHabitos.current.value = ''; // Limpiar el input

    // Redirige a la página de lista de hábitos después de un breve retraso
    setTimeout(() => {
      navigate('/Habit-Tracking/ListaHabitos');
    }, 100);

  };



  return (
    <div className='mt-48'>
      <h1 className='text-center text-5xl m-2 text-cyan-500 font-bold'>Forma un hábito en solo 30 días</h1>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center bg-gray-800 shadow-2xl shadow-gray-700 mt-16 p-8 h-auto w-96 mx-auto rounded-2xl transform transition-all duration-500 hover:scale-105'
      >
        <label className='text-3xl text-center text-cyan-400 mb-4' htmlFor="habito">¿Qué hábito deseas crear?</label>
        <input
          ref={nombreHabitos}
          className='rounded-full p-4 w-full text-lg text-gray-900 focus:ring-4 focus:ring-cyan-400 outline-none transition-all duration-300'
          type="text"
          id="habito"
          name="habito"
          placeholder='Ejemplo: Meditar'
          maxLength={18}
        />
        <button
          className='bg-cyan-500 text-center text-white font-semibold rounded-full mt-6 px-8 py-4 transition-all duration-300 hover:bg-cyan-400'
          type="submit"
        >
          Crear Hábito
        </button>
      </form>
    </div>


  );
};

export default Formulario;
