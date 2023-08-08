export const SectionSteps: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <h1 className='text-pup-text_w_1 font-extrabold text-2xl tracking-wide'>Pasos para coordinar un paseo para tu mascota</h1>

      <div className='w-full pt-8'>
        <ul className='flex justify-between w-full pt-8 [&>li>p]:pt-8'>
          <li className='flex flex-col w-1/3 h-full justify-start items-center'>
            <div className=' rounded-2xl cursor-pointer  bg-pup-purple2 text-pup-text_w_1 w-10 h-10 flex justify-center items-center text-2xl font-extrabold'>1</div>
            <p className='text-center w-full text-pup-text_w_1 font-light'>✓ Registrate e inicia sesión</p>
          </li>
          <li className='flex flex-col w-1/3 px-2 md:w-full h-full justify-center items-center'>
            <div className=' rounded-2xl cursor-pointer bg-pup-purple2 text-pup-text_w_1 w-10 h-10 flex justify-center items-center text-2xl font-extrabold'>2</div>
            <div className='text-center text-pup-text_w_1 font-light max-w-xs pt-8'>✓ Escribe el día y hora que necesitas para que se realice el paseo</div>
          </li>
          <li className='flex flex-col w-1/3 h-full justify-center items-center'>
            <div className=' rounded-2xl cursor-pointer bg-pup-purple2 text-pup-text_w_1 w-10 h-10 flex justify-center items-center text-2xl font-extrabold'>3</div>
            <p className='w-full text-center text-pup-text_w_1 font-light'>✓ Recibe las ofertas de nuestros paseadores y selecciona el que vos prefieras</p>
          </li>
        </ul>
      </div>

    </div>
  )
}
