import cohete from "../assets/rocket.png"

const Home = () => {



    return (
        <>
        <div className=" flex flex-col items-center mt-48 justify-center">

          <h1 className="text-5xl text-center">
            Empieza a crear habitos
          </h1>
          <span>
            <img
            className=' min-w-40 min-h-40 mt-5'
            src={cohete}
            alt="imagen-cohete"
          />  
          </span>
        

        </div>


        
      </>
      

    )
}

export default Home
