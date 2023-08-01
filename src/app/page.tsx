'use client'

import { Button } from '@tremor/react'
import oneDog from '../../public/canwalk.webp'
import twoDog from '../../public/cristian-castillo-73pyV0JJOmE-unsplash.jpg'
import Image from 'next/image'
import Header from './components/Header'

export default function Home (): JSX.Element {
  return (
    <main className='flex h-screen w-screen flex-col items-center justify-between bg-pup-container'>
      <Header />
      <section className='rounded-md overflow-hidden w-3/4 relative md:h-full flex flex-col gap-20'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-pup-text_w_1 font-extrabold text-2xl tracking-wide'>Te ofrecemos nuestro servicio de paseos para perros</h1>
          <h3 className='text-pup-text_w_1'>Paseamos a tu mascota </h3>
        </div>
        <div className='flex flex-row w-full justify-evenly'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-pup-text_w_1 font-bold mb-3 mt-3'>Beneficio de nuestros clientes</h1>
            <h3 className='text-pup-text_w_1 font-light'>✓ Manejo propio de horarios</h3>
            <h3 className='text-pup-text_w_1 font-light'>✓ Manejo propio de horarios</h3>
            <h3 className='text-pup-text_w_1 font-light'>✓ Manejo propio de horarios</h3>
            <h2 className='text-pup-text_w_1 font-bold mb-3 mt-3'>Deseas trabajar con nosotros?</h2>
            <Button>Registro</Button>
          </div>
          <div>
            <Image src={oneDog} alt='oneDog' width={300} height={300} />
          </div>
        </div>
        <div className='flex flex-row w-full justify-evenly'>
          <div>
            <Image src={twoDog} alt='twoDog' width={300} height={300} />
          </div>
          <div className='flex flex-col justify-center'>
            <h1 className='text-pup-text_w_1 font-bold mb-3 mt-3'>Beneficio de trabajar como paseador</h1>
            <h3 className='text-pup-text_w_1 font-light'>✓ Manejo propio de horarios</h3>
            <h3 className='text-pup-text_w_1 font-light'>✓ Manejo propio de horarios</h3>
            <h3 className='text-pup-text_w_1 font-light'>✓ Manejo propio de horarios</h3>
            <h2 className='text-pup-text_w_1 font-bold mb-3 mt-3'>Deseas trabajar con nosotros?</h2>
            <Button>Registro de Paseador</Button>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-pup-text_w_1 font-extrabold text-2xl tracking-wide'>Pasos para coordinar un paseo para tu mascota</h1>

          <div className='flex flex-row justify-evenly w-full'>
            <div className='flex flex-col justify-center items-center'>
              <div className='border rounded-2xl cursor-pointer border-stone-300 bg-gray-600 w-10 h-10 flex justify-center items-center text-2xl font-extrabold'>1</div>
              <div><p className='text-pup-text_w_1 font-light'>✓ Registrate e inicia sesión</p></div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='border rounded-2xl cursor-pointer border-stone-300 bg-gray-600 w-10 h-10 flex justify-center items-center text-2xl font-extrabold'>2</div>
              <div><p className='text-pup-text_w_1 font-light max-w-xs'>✓  Seleccionar por día y horario a un paseador que se encuentre disponible.</p></div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='border rounded-2xl cursor-pointer border-stone-300 bg-gray-600 w-10 h-10 flex justify-center items-center text-2xl font-extrabold'>3</div>
              <div><p className='text-pup-text_w_1 font-light'>✓ Manejo propio de horarios</p></div>
            </div>

          </div>

        </div>

        <div className='flex flex-row w-full justify-evenly'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-pup-text_w_1 font-bold mb-3 mt-3'>Sobre Nosotros</h1>
            <h3 className='text-pup-text_w_1 font-light'>✓ Manejo propio de horarios</h3>
            <h3 className='text-pup-text_w_1 font-light'>✓ Manejo propio de horarios</h3>
            <h3 className='text-pup-text_w_1 font-light'>✓ Manejo propio de horarios</h3>
            <h2 className='text-pup-text_w_1 font-bold mb-3 mt-3'>Deseas trabajar con nosotros?</h2>
            <Button>Registro</Button>
          </div>
          <div>
            <Image src={oneDog} alt='oneDog' width={300} height={300} />
          </div>
        </div>

      </section>
    </main>
  )
}
