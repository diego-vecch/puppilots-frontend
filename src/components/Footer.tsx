import Link from 'next/link'
import { LogoApp } from './LogoApp'
import { Col, Grid } from '@tremor/react'
import { IconGitHub } from './IconsSvg'

export default function Footer (): JSX.Element {
  return (
    <footer className='max-w-[1420px] w-full px-6 bg-pup-container rounded-t-[2rem] pt-4 pb-2 z-10'>
      <div className=''>
        <Grid numItems={1} numItemsSm={2} numItemsMd={2} numItemsLg={4} className='px-6 gap-y-5 sm:gap-y-4  md:space-y-0 md:px-4 xl:px-0'>
          <div>
            <div className='w-full flex justify-center'><LogoApp /></div>
            <p className='font-lato text-center text-pup-text_w_3'>Encuentra el paseo que buscas para tu perro</p>
          </div>
          <ul className='text-center'>
            <li>
              <p className='bold tracking-widest font-lato text-xl mb-1'>Servicios</p>
            </li>
            <li>
              <Link href='/' className='italic text-pup-text_w_2 hover:text-pup-text_w_1'>Paseador</Link>
            </li>
            <li>
              <Link href='/' className='italic text-pup-text_w_2 hover:text-pup-text_w_1'>Cliente</Link>
            </li>
          </ul>
          <div className='bold tracking-widest font-lato text-xl text-center'>
            <p>
              Contacto
            </p>
          </div>
          <div className='tracking-widest font-lato text-xl text-center flex flex-col justify-center items-center'>
            <p className='bold'>Repositorios</p>
            <ul className='text-center text-base w-1/3'>
              <li>
                <Link href='https://github.com/diego-vecch/puppilots-frontend' className='italic text-pup-text_w_2 hover:text-pup-text_w_1 flex items-center justify-center'><div><IconGitHub /></div>Frontend</Link>
              </li>
              <li>
                <Link href='https://github.com/acamus79/puppilots-backend' className='italic text-pup-text_w_2 hover:text-pup-text_w_1 flex items-center justify-center'><div><IconGitHub /></div>Backend</Link>
              </li>
            </ul>
          </div>
          <Col numColSpan={1} numColSpanSm={2} numColSpanMd={2} numColSpanLg={4}>
            <div>
              <p className='text-center bold tracking-widest font-lato text-xl text-pup-text_w_2 italic'>©copyright</p>
            </div>
          </Col>
        </Grid>
      </div>
    </footer>
  )
}
