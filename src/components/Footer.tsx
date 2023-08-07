import Link from 'next/link'
import { LogoApp } from './LogoApp'
import { Col, Grid } from '@tremor/react'

export default function Footer (): JSX.Element {
  return (
    <footer className='max-w-[1420px] w-full px-6 bg-pup-container rounded-t-[2rem] pt-4 pb-2 z-10'>
      <div className=''>
        <Grid numItems={1} numItemsSm={2} numItemsMd={2} numItemsLg={4} className='px-6 gap-y-5 sm:gap-y-4  md:space-y-0 md:px-4 xl:px-0'>
          <div>
            <LogoApp />
            <p className='font-lato'>Encuentra el paseo que buscas para tu perro</p>
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
          <div className='bold tracking-widest font-lato text-xl text-center'><p>5° Devaton</p></div>
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
