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
    <div className='mt-24'>
      <h1 className='text-center text-5xl m-2'>Un hábito se forma en solo 30 días</h1>

      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 space-y-3 justify-items-center bg-slate-900 shadow-slate-600 shadow-xl mt-16 p-4 h-auto w-72 mx-auto rounded-lg'
      >
        <label className='text-4xl text-center text-purple-700' htmlFor="habito">¿Qué hábito quieres crear?</label>
        <input
          ref={nombreHabitos}
          className='rounded-lg p-2'
          type="text"
          id="habito"
          name="habito"
          placeholder='Ejemplo: leer'
          maxLength={12}
        />
        <button
          className=' bg-cyan-400 text-center rounded-lg'
          type="submit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="120px" viewBox="0 -960 960 960" width="120px" fill="#e8eaed">
            <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" />
          </svg>
        </button>
      </form>

    </div>
  );
};

export default Formulario;
