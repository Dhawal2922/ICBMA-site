import React from 'react'
import bg from "../assets/notebook.jpg";


const Keynotes = () => {
  return (
   <div className="w-full">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="relative h-[400px] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white text-center px-4">
            Keynotes
          </h1>
        </div>
      </div>

      <div className='py-20 px-4 text-center text-gray-500'>
        <p className='text-2xl sm:text-3xl lg:text-5xl whitespace-normal text-center font-thin'>To be Updated Soon .....</p>
      </div>

    </div>
  )
}

export default Keynotes
