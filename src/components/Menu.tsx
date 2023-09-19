import AncoreMenu from './AncoreMenu'
import ButtonWhite from './ButtonWhite'
import { LogoApp } from './LogoApp'
import { redirect } from 'next/navigation'
import { MenuResponsive } from './MenuResponsive'
import Link from 'next/link'
import { useEffect, useState, useCallback } from 'react'

export default function Menu (): JSX.Element {
  const [logged, setLogged] = useState(false)
  const [outSession, setOutSession] = useState(false)
  const [nameUser, setNameUser] = useState(typeof window !== 'undefined' && window.sessionStorage.getItem('email'))
  const closeSession = useCallback((): void => {
    window.sessionStorage.clear()
    setOutSession(true)
  }, [])
  useEffect(() => {
    if (window.sessionStorage.getItem('isLogged') === 'true') {
      setLogged(true)
    }
  }, [])
  useEffect(() => { setNameUser(typeof window !== 'undefined' && window.sessionStorage.getItem('email')) }, [])
  useEffect(() => {
    if (outSession) {
      closeSession()
      redirect('/')
    }
  }, [closeSession, outSession])

  return (
    <div className='w-full'>
      <header className='w-full flex justify-center'>
        <nav className='text-pup-text_w_1 flex w-full justify-center md:justify-between pt-5 pb-4 md:py-3 max-w-[1400px] px-3'>
          <div className='pl-1 md:w-full'>
            <LogoApp />
          </div>
          <div className='hidden md:flex'>
            <ol className='flex [&>li]:px-2 py-1'>
              <li>
                <AncoreMenu>Inicio</AncoreMenu>
              </li>
              <li>
                <AncoreMenu>Servicio</AncoreMenu>
              </li>
              <li><AncoreMenu>Contacto</AncoreMenu></li>
            </ol>
          </div>
          {!logged && (
            <div className='hidden md:flex w-full justify-end'>
              <div className='px-2 py-1'><ButtonWhite><Link href='/login'>Iniciar Sesión</Link></ButtonWhite></div>
              <div className='px-1 py-1'><ButtonWhite><Link href='/register'>Registro</Link></ButtonWhite></div>
            </div>
          )}
          {logged && (
            <div className='hidden md:flex w-full justify-end'>
              <div className='px-2 py-1'><ButtonWhite><Link href='/login'>{nameUser}</Link></ButtonWhite></div>
              <div className='px-2 py-1'>
                <button onClick={closeSession}>Cerrar Sesión
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
      <div className='md:hidden'>
        <MenuResponsive />
      </div>
    </div>
  )
}
