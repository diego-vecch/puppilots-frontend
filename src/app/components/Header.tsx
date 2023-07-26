import AncoreMenu from './AncoreMenu'
import ButtonWhite from './ButtonWhite'
import { LogoApp } from './LogoApp'

export default function Header (): JSX.Element {
  return (
    <header className='w-full flex justify-center'>
      <nav className='text-pup-text_w_1 flex w-full justify-between px-1 py-3 max-w-[1400px]'>
        <div className=''>
          <LogoApp />
        </div>
        <div className=''>
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
        <div className='flex'>
          <div className='px-2 py-1'><ButtonWhite>Iniciar Sesión</ButtonWhite></div>
          <div className='px-2 py-1'><ButtonWhite>Registro</ButtonWhite></div>
        </div>
      </nav>
    </header>
  )
}
