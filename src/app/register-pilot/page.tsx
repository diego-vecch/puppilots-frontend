import ButtonWhite from '@/components/ButtonWhite'
import { InputForm } from '@/components/InputForm'
import { LabelForm } from '@/components/LabelForm'
import { LogoApp } from '@/components/LogoApp'
import { Col, Grid } from '@tremor/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page (): JSX.Element {
  return (
    <main className='bg-pup-container min-h-screen flex justify-center place-items-center'>
      <Grid className='w-11/12 max-w-5xl border rounded-2xl overflow-hidden border-indigo-700' numItemsMd={2}>
        <figure className='h-full relative'>
          <Image className='object-cover h-full w-ful' src='/walker-dog-form.jpg' alt='Imagen de un labrador. Imagen obtenida de Unplash. Autor:taylor-kopel' width={1000} height={600} />
          <div
            className='rounded-l-2xl absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-900 bg-gradient-to-b from-pup-container from-10% via-indigo-950 via-15%% to-indigo-900 to-95%% bg-fixed opacity-30'
          />
          <div className='absolute top-8 w-full flex justify-center'><LogoApp /></div>
        </figure>
        <form className='px-5 py-8'>
          <p className='text-white text-center font-lato bold text-xl'>Registro de Paseador</p>
          <Grid className='w-full gap-3 mt-4' numItemsMd={2}>
            <div>
              <LabelForm>Nombre</LabelForm>
              <InputForm />
            </div>
            <div>
              <LabelForm>Apellido</LabelForm>
              <InputForm />
            </div>
            <Col numColSpanMd={2}>
              <LabelForm>Correo</LabelForm>
              <InputForm />
            </Col>
            <div>
              <LabelForm>Dni</LabelForm>
              <InputForm />
            </div>
            <div>
              <LabelForm>Telefono</LabelForm>
              <InputForm />
            </div>
            <Col numColSpan={2}>
              <LabelForm>Ubicación</LabelForm>
              <div className='w-full h-36 bg-gray-200 rounded' />
            </Col>
            <Col numColSpanMd={2}>
              <LabelForm>Residencia</LabelForm>
              <InputForm />
            </Col>
            <Col numColSpanMd={2}>
              <LabelForm>Piso</LabelForm>
              <InputForm />
            </Col>
            <Col numColSpanMd={2}>
              <LabelForm>Referencia</LabelForm>
              <InputForm />
            </Col>
            <div>
              <LabelForm>Contraseña</LabelForm>
              <InputForm />
            </div>
            <div>
              <LabelForm>Repita la contraseña</LabelForm>
              <InputForm />
            </div>
            <Col numColSpan={2} className='justify-self-center mt-3'>
              <ButtonWhite><Link href='./'>Enviar</Link></ButtonWhite>
            </Col>
          </Grid>
        </form>
      </Grid>
    </main>
  )
}
