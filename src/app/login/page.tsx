'use client'

import { CustomInput } from '@/components/CustomInput'
import { LabelForm } from '../../components/LabelForm'
import { LogoApp } from '../../components/LogoApp'
import { useState } from 'react'
import { useLogin } from '@/hooks/useLogin'

export default function Login (): JSX.Element {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: ''
  })
  const [sendData, setSendData] = useState(false)
  const send = (): void => {
    setSendData(true)
  }

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  const { error } = useLogin(sendData, loginUser)

  return (
    <div className='bg-pup-container h-screen flex justify-center place-items-center'>
      <div className='w-[400px] h-[380px] max-w-5xl max-h-[670px] flex border-indigo-700 border-opacity-60 rounded-2xl border-2'>
        <div className='w-full h-full grid'>
          <div className='h-[50px] w-full flex items-center justify-center mt-5'><LogoApp /></div>
          <form onSubmit={handleSubmit} className='w-full h-full px-2 xs:px-4 sm:px-6 md:px-8 pt-1 pb-3 flex flex-col [&>p]:flex [&>p]:flex-col [&>p]:h-full [&>p>label]:pb-1 [&>p>label]:text-pup-text_w_2'>
            <div>
              <p className='text-center flex place-content-center text-xl text-pup-text_w_2 pt-1 pb-6 font-lato bold'>Iniciar Sesión</p>
            </div>
            <section className='[&div]:w-full h-[85px]'>
              <div><LabelForm>Email</LabelForm></div>
              <div><CustomInput onChange={inputChange} value={loginUser.email} name='email' type='email' placeholder='ejemplo: juan-juan@gmail.com' /></div>
              {error && (<p className='text-red-400'>&nbsp;Campo Obligatorio</p>)}
            </section>
            <section className='[&div]:w-full h-[85px]'>
              <div><LabelForm>Contraseña</LabelForm></div>
              <div><CustomInput onChange={inputChange} value={loginUser.password} name='password' type='password' placeholder='ejemplo: 123@Aabcdf#' /></div>
              {error && (<p className='text-red-400'>&nbsp;Campo Obligatorio</p>)}
            </section>
            <section className='flex justify-center'>
              <div className='text-center pt-2 pb-4 sm:1/2 md:w-1/4'>
                <button onClick={send} type='submit'>Enviar</button>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  )
}
