'use client'
import { useState } from 'react'
import Link from 'next/link'
import AncoreMenu from './AncoreMenu'
import ButtonWhite from './ButtonWhite'
import { LogoCancelMenu, LogoMenu } from './LogoMenu'

export const MenuResponsive: React.FC = () => {
  const [viewMenu, setViewMenu] = useState(false)
  const changeIcon = (): void => {
    setViewMenu(!viewMenu)
  }
  return (
    <div>
      {viewMenu && (
        <div className='md:hidden bg-pup-container bg-gradient-to-b from-pup-container via-[#110f1e] via-80% to-[#131328] absolute w-6/12 sm:w-5/12 h-full bottom-0 right-0 z-20'>
          <h4 className='text-pup-text_w_2 text-center pt-4 pb-2'>Menú</h4>
          <nav className='w-full'>
            <ol className='[&>li]:px-2 [&>li]:w-full w-full py-1 [&>li]:justify-center [&>li]:flex [&>li]:py-1'>
              <li>
                <AncoreMenu>Inicio</AncoreMenu>
              </li>
              <li>
                <AncoreMenu>Servicio</AncoreMenu>
              </li>
              <li>
                <AncoreMenu>Contacto</AncoreMenu>
              </li>
              <li className='mt-5'>
                <ButtonWhite>Iniciar Sesión</ButtonWhite>
              </li>
              <li>
                <ButtonWhite><Link href='/register-client'>Registro usuario</Link>s</ButtonWhite>
              </li>
              <li>
                <ButtonWhite>Registro de paseadores</ButtonWhite>
              </li>
            </ol>
          </nav>
        </div>)}
      <div
        onClick={changeIcon}
        className='md:hidden absolute bottom-4 right-4 z-30 w-12 xs:w-14 bg-indigo-600 bg-opacity-80 hover:bg-indigo-400 rounded-lg p-2 '
      >
        {!viewMenu && (<LogoMenu />)}
        {viewMenu && (<LogoCancelMenu />)}
      </div>
    </div>
  )
}
