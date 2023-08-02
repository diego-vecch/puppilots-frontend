import AncoreMenu from './AncoreMenu'
import ButtonWhite from './ButtonWhite'
import { LogoApp } from './LogoApp'
import { MenuResponsive } from './MenuResponsive'
import Link from 'next/link'

export default function Menu (): JSX.Element {
  return (
    <div className='w-full'>
      <header className='w-full flex justify-center'>
        <nav className='text-pup-text_w_1 flex w-full justify-center md:justify-between px-1 pt-5 pb-4 md:py-3 max-w-[1400px]'>
          <div className='pl-1'>
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
          <div className='hidden md:flex'>
            <div className='px-2 py-1'><ButtonWhite><Link href='/dashboard'>Iniciar Sesión</Link></ButtonWhite></div>
            <div className='px-1 py-1'><ButtonWhite><Link href='/register-client'>Registro usuario</Link></ButtonWhite></div>
            <div className='px-1 py-1'><ButtonWhite><Link href=''>Registro de paseadores</Link></ButtonWhite></div>
          </div>
        </nav>
      </header>
      <div className='md:hidden'>
        <MenuResponsive />
      </div>
    </div>
  )
}
