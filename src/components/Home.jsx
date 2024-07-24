

const Home = () => {



    return (
        <>
        <div className=" flex flex-col items-center mt-24 justify-center">

          <h1 className="text-5xl text-center">
            Empieza a crear habitos
          </h1>

          <img
            className=" min-w-40 max-w-52 mt-5 "
            src="./rocket.png"
            alt="imagen-cohete-roket"
          />

        </div>


        <div className="flex flex-col items-center bg-slate-900 text-white mb-20 mt-20 text-center">

          <h2 className="text-3xl border mt-3 mx-2 ">¿Por qué son importantes los hábitos en tu vida?</h2>

          <ul className="flex flex-col text-3xl items-center m-2 space-y-2">
            <li className=" bg-black text-purple-700  m-2 rounded-md p-2">
              Automatizan tareas diarias, ahorrando energía mental.
            </li>
            <li className=" bg-black text-red-700  m-2 rounded-md p-2">
              Mejoran la eficiencia y facilitan el logro de objetivos.
            </li>
            <li className=" bg-black text-cyan-400  m-2 rounded-md p-2">
              Desarrollan disciplina y reducen el estrés proporcionando una rutina estable.
            </li>
          </ul>

        </div>
      </>
      

    )
}

export default Home
