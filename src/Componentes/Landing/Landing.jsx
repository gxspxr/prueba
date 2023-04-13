import React from 'react'
import People from '../../Images/asd.svg'
const Landing = () => {
  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-600 to-slate-900 '>
      <div className='flex h-0 w-0 flex-row'>
        <p className='justify-end select-none mr-28 text-gray-300 underline decoration-solid hover:text-white cursor-pointer ml-20 pt-2'>Precios</p>
        <p className='justify-end select-none mr-28 text-gray-300 underline decoration-solid hover:text-white cursor-pointer ml-20 pt-2'>Recursos</p>
      </div>
      <div className='flex flex-row gap-9 justify-end pr-10 pt-1'>
        <p className='fixed justify-end select-none pt-2 mr-28 text-gray-300 underline decoration-solid hover:text-white cursor-pointer'>
          Iniciar Sesion
        </p>
        <button className='border-solid fixed border-sky-500 bg-slate-900 hover:shadow-xl hover:shadow-indigo-500/70 rounded-2xl w-2xl h-10 select-none text-gray-300 hover:text-white cursor-buttonointer'>
          Empezar
        </button>
      </div>

      <div className='ml-10 mt-20'>
        <p className='inline-block text-4xl font-montserrat font-extrabold text-white mr-60'>
          Sistema CRM
        </p>
        <p className='max-w-3xl text-lg text-white  '>
          Un CRM (Customer Relationship Management) es un sistema que permite a las empresas gestionar las relaciones con sus clientes de forma eficaz y eficiente, lo que se traduce en una mejor atención al cliente y un aumento de las ventas.
        </p>
      </div>
      <img className='inline-block justify-end vertical-align-middle ml-80 mr-0 mt-10' src={People} alt='' />
 
      <div className='flex flex-col items-center mt-20 bg-white rounded-sl'>
        <h1 className='text-4xl font-bold text-zinc-800'>Plan de compra</h1>
        <div className='bg-gray-100 p-8 rounded-lg mt-5 mb-5 max-w-3xl'>
          <h2 className='text-2xl font-bold text-zinc-800 '>Plan premium</h2>
          <h2 className=' text-lg font-bold text-zinc-800 mb-5'>$100/mes</h2>
          <ul className='list-disc list-inside'>
            <li className='text-gray-700 mb-2'>Acceso a todas las funcionalidades del sistema CRM.</li>
            <li className='text-gray-700 mb-2'>Soporte técnico 24/7.</li>
            <li className='text-gray-700 mb-2'>Actualizaciones gratuitas.</li>
          </ul>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5 animate-bounce'>Comenzar</button>
        </div>
      </div>

         <footer className="bg-gradient-to-br from-slate-600 to-slate-900 p-5 flex justify-center ">
          <ul className="flex gap-5 mt-5 mb-5">
            <li className="text-white cursor-pointer hover:text-gray-300">Contactanos</li>
            <li className="text-white cursor-pointer hover:text-gray-300">Soporte Tecnico</li>
        </ul>
        </footer>
    </main>
  )
}

export default Landing