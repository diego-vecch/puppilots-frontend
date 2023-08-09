'use client'
import Link from 'next/link'
import { InputEmailForm, InputPasswordForm } from '../../components/InputForm'
import { LabelForm } from '../../components/LabelForm'
import { LogoApp } from '../../components/LogoApp'
import ButtonWhite from '../../components/ButtonWhite'

export default function login (): JSX.Element {
  return (
    <div className='bg-pup-container h-screen flex justify-center place-items-center'>
      <div className='absolute inset-x-0 top-4 w-full pt-4 flex justify-center'><LogoApp /></div>
      <div className='w-[400px] h-[300px] max-w-5xl max-h-[670px] flex border-indigo-700 border-opacity-60 rounded-2xl border-2'>
        <div className='h-full relative rounded-l-2xl'>
          <div
            className='rounded-l-2xl absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-900 bg-gradient-to-b from-pup-container from-10% via-indigo-950 via-15%% to-indigo-900 to-95%% bg-fixed opacity-30'
          />
        </div>
        <form className='w-full h-full px-2 xs:px-6 sm:px-8 md:px-16 pt-6 pb-8 flex flex-col [&>p]:flex [&>p]:flex-col [&>p]:h-full [&>p>label]:pb-1 [&>p>label]:text-pup-text_w_2'>
          <div>
            <p className='text-center flex place-content-center text-xl text-pup-text_w_2 pt-1 pb-8 font-lato bold'>Iniciar Sesión</p>
          </div>
          <p>
            <LabelForm>Email</LabelForm>
            <InputEmailForm />
          </p>
          <p>
            <LabelForm>Contraseña</LabelForm>
            <InputPasswordForm />
          </p>
          <div className='flex justify-center'>
            <div className='text-right pt-2 pb-4 sm:1/2 md:w-1/4'>
              <ButtonWhite><Link href='./'>Enviar</Link></ButtonWhite>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
