import React from 'react'

const NoCertificate = () => {
  return (
    <div className="flex min-h-screen w-full bg-white " >
        <div className="absolute inset-0 z-0">
          <img
            src="/bg-image.jpeg"
            alt="Background"
            className="w-100% h-100% object-contain opacity-25 z-5 pointer-events-none opacity-0.9"
          />
        </div>
        <div className='flex justify-center items-center text-center'>
          <h2 className='justify-center items-center text-center text-2xl font-bold'>No Data , Please Fill the Form Again.</h2>
        </div>
    </div>
  )
}

export default NoCertificate
