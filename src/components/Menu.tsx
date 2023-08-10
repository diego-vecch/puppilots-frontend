import AncoreMenu from './AncoreMenu'
import ButtonWhite from './ButtonWhite'
import { LogoApp } from './LogoApp'
import { MenuResponsive } from './MenuResponsive'
import Link from 'next/link'

export default function Menu (): JSX.Element {
  return (
    <div className='w-full'>
      <header className='w-full flex justify-center'>
        <nav className='text-pup-text_w_1 flex w-full justify-center md:justify-between pt-5 pb-4 md:py-3 max-w-[1400px]'>
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
          <div className='hidden md:flex w-full justify-end'>
            <div className='px-2 py-1'><ButtonWhite><Link href='/login'>Iniciar Sesión</Link></ButtonWhite></div>
            <div className='px-1 py-1'><ButtonWhite><Link href='/register'>Registro</Link></ButtonWhite></div>
          </div>
        </nav>
      </header>
      <div className='md:hidden'>
        <MenuResponsive />
      </div>
    </div>
  )
}
