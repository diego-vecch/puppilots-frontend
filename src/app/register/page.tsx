'use client'
import Link from 'next/link'
import { LogoApp } from '../../components/LogoApp'
import { ArrowReturn } from '@/components/IconsSvg'
import Image from 'next/image'
import { useState } from 'react'
import { Form } from './componentsRegister/Form'
import { FormRegisterPilot } from './componentsRegister/FormPilot'

export default function RegisterClient (): JSX.Element {
  const [viewForm, setViewForm] = useState(true)
  const [viewFormPilot, setViewFormPilot] = useState(false)
  const [viewFormClient, setViewFormClient] = useState(false)
  return (
    <div className='bg-pup-container h-screen flex justify-center place-items-center'>
      <div className='w-11/12 lg:w-10/12 h-[520px] max-w-4xl max-h-[670px] flex border-indigo-700 border-opacity-60 rounded-2xl border-2'>
        <div className='h-full relative rounded-l-2xl'>
          <Image className='object-cover object-top h-full w-ful rounded-l-2xl' src='/dog-forms.jpeg' alt='Imagen de un labrador. Imagen obtenida de Unplash. Autor:taylor-kopel' width={1000} height={600} />
          <div
            className='rounded-l-2xl absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-900 bg-gradient-to-b from-pup-container from-10% via-indigo-950 via-15%% to-indigo-900 to-95%% bg-fixed opacity-50'
          />
          <div className='absolute left-0 top-0 w-full pt-6 pl-4 flex justify-start z-10'><Link href='/'><ArrowReturn /></Link></div>
          <div className='absolute inset-x-0 top-4 w-full pt-4 flex justify-center'><LogoApp /></div>
        </div>
        <div className='font-lato w-full px-2 xs:px-2 sm:px-3 md:px-5 lg:px-8 py-3 flex items-center flex-col [&>p]:flex [&>p]:flex-col [&>p]:h-full [&>p>label]:pb-1 [&>p>label]:text-pup-text_w_2 '>
          <div>
            <p
              className='text-center flex place-content-center text-xl text-pup-text_w_2 pt-3 pb-4 font-lato bold'
            >
              Registro
            </p>
          </div>
          <section className='h-full w-full grid items-center'>

            {viewForm && (
              <div>
                <div className=' w-full pb-10'>
                  <div className='pl-6 pb-4'><p className='text-base'>Selecciona cual es tu interés:</p></div>
                  <div className='flex flex-col w-full justify-center'>
                    <div className='grid w-full pt-3 pr-2 justify-center'>
                      <div className='pb-2'>
                        <button
                          onClick={() => {
                            setViewForm(false)
                            setViewFormClient(true)
                          }} className='w-full border-indigo-700 border-opacity-60 rounded-2xl border-2 px-3 hover:bg-pup-text_b_1 hover:bg-opacity-50 mx-2'
                        >Que paseen a mis mascotas
                        </button>
                      </div>
                      <div className='pt-3'>
                        <button
                          onClick={() => {
                            setViewForm(false)
                            setViewFormPilot(true)
                          }} className=' w-full border-indigo-700 border-opacity-60 rounded-2xl border-2 px-3 hover:bg-pup-text_b_1 hover:bg-opacity-50 mx-2'
                        >Trabajar paseando perros
                        </button>
                      </div>
                    </div>
                    <div />
                  </div>
                </div>
              </div>)}
            {viewFormClient &&
            (
              <div className='h-full flex items-center'>
                <Form />
              </div>
            )}
            {viewFormPilot &&
            (
              <div className='h-full flex items-center'>
                <FormRegisterPilot />
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
