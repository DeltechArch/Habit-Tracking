import cohete from "../assets/rocket.png"

const Home = () => {



  return (
    <>
      <div className="flex flex-col items-center mt-48 md:mt-48 justify-center px-4">
        <h1 className="text-3xl md:text-5xl text-center font-bold text-cyan-400 mb-4">
          Empieza a crear hábitos
        </h1>
        <span>
          <img
            className='w-24 h-24 md:w-40 md:h-40 mt-4'
            src={cohete}
            alt="imagen-cohete"
          />
        </span>
      </div>




    </>


  )
}

export default Home
