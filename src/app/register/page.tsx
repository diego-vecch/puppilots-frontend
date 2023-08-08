'use client'
import Link from 'next/link'
import { LabelForm } from '../../components/LabelForm'
import { LogoApp } from '../../components/LogoApp'
import { ArrowReturn } from '@/components/IconsSvg'
import { CustomInput } from '@/components/CustomInput'
import Image from 'next/image'
import { useContext } from 'react'
import { ContextUser } from '@/context/ContextUser'

export default function RegisterClient (): JSX.Element {
  const { setInfoUser } = useContext(ContextUser)
  const updateInfo = (): void => {
    setInfoUser({
      email: 'nuevo mail',
      password: 'nueva password'
    })
  }
  return (
    <div className='bg-pup-container h-screen flex justify-center place-items-center'>
      <div className='w-11/12 lg:w-9/12 h-[470px] max-w-4xl max-h-[670px] flex border-indigo-700 border-opacity-60 rounded-2xl border-2'>
        <div className='h-full relative rounded-l-2xl'>
          <Image className='object-cover object-top h-full w-ful rounded-l-2xl' src='/dog-forms.jpeg' alt='Imagen de un labrador. Imagen obtenida de Unplash. Autor:taylor-kopel' width={1000} height={600} />
          <div
            className='rounded-l-2xl absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-900 bg-gradient-to-b from-pup-container from-10% via-indigo-950 via-15%% to-indigo-900 to-95%% bg-fixed opacity-50'
          />
          <div className='absolute left-0 top-0 w-full pt-6 pl-4 flex justify-start z-10'><Link href='/'><ArrowReturn /></Link></div>
          <div className='absolute inset-x-0 top-4 w-full pt-4 flex justify-center'><LogoApp /></div>
        </div>
        <div className='font-lato w-full px-2 xs:px-2 sm:px-3 md:px-5 lg:px-8 py-4 flex items-center flex-col [&>p]:flex [&>p]:flex-col [&>p]:h-full [&>p>label]:pb-1 [&>p>label]:text-pup-text_w_2 '>
          <section className='h-full w-full grid items-center'>
            <div>
              <p
                className='text-center flex place-content-center text-xl text-pup-text_w_2 pt-3 pb-5 font-lato bold'
              >
                Registro
              </p>
            </div>
            <div className='h-full flex items-center'>
              <footer className='w-full h-full grid m-0 [&>p]:py-2'>
                <div className=' w-full pb-2'>
                  <p className='text-base'>Selecciona como querés registrarte:</p>
                  <div className='flex flex-col w-full justify-center'>
                    <div className='flex w-full pt-3 pr-2 justify-center'>
                      <button className='border-indigo-700 border-opacity-60 rounded-2xl border-2 px-3 hover:bg-pup-text_b_1 hover:bg-opacity-50 mx-2'>Usuario</button>
                      <button className='border-indigo-700 border-opacity-60 rounded-2xl border-2 px-3 hover:bg-pup-text_b_1 hover:bg-opacity-50 mx-2'>Paseador</button>
                    </div>
                    <div />
                  </div>
                </div>
                <p>
                  <LabelForm>Email</LabelForm>
                  <CustomInput type='email' placeholder='ejemplo: juan-juan@gmail.com' />
                </p>
                <p>
                  <LabelForm>Contraseña</LabelForm>
                  <CustomInput type='password' placeholder='ejemplo: 123@Aabcdf#' />
                </p>
                <p>
                  <LabelForm>Repetir Contraseña</LabelForm>
                  <CustomInput type='password' />
                </p>
                <div className='flex items-center justify-center'>
                  <div className='text-center pt-4 pb-3 sm:1/2 md:w-1/4'>
                    <button onClick={updateInfo}>{/* <Link href='./'>Enviar</Link> */}Enviar</button>
                  </div>
                </div>
              </footer>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
