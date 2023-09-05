import { useState } from 'react'
import { IconEdit, IconOpenToDown, IconOpenToUp, IconDog } from '@/components/IconsSvg'

type PropCardPuppet = {
  key: string
  name: string
  breed: string
  size: string
  sex: string
  observations: string
}

export const PuppetCard: React.FC<PropCardPuppet> = ({ key, name, breed, size, sex, observations }) => {
  const [view, setView] = useState(false)
  const obs = observations === '' ? '---' : observations
  return (
    <div
      key={key}
      className='flex flex-col hover:bg-indigo-950 rounded-lg p-2 cursor-pointer'
    >
      <section className='flex justify-between items-center gap-6'>
        <div><IconDog /></div>
        <div>{name}</div>
        {!view && (
          <div
            className='w-full flex items-center'
            onClick={() => { setView(!view) }}
          >

            <div
              className='w-full flex justify-center hover:bg-indigo-800 rounded-lg'
            >
              <IconOpenToDown />
            </div>
          </div>)}
        {view && (
          <section className='w-full flex justify-end items-center text-pup-text_w_3'>
            <div className='flex items-center'>
              <button
                onClick={() => console.log('edit')}
                className='w-full z-20'
              ><IconEdit />
              </button>
            </div>
          </section>)}
      </section>

      <div className=''>
        {view && (
          <div>
            <section
              className='flex flex-wrap py-4 text-pup-text_w_2 justify-between gap-x-8 gap-y-2'
            >
              <div>Raza: {breed}</div>
              <div>Tamaño: {size}</div>
              <div>Sexo: {sex}</div>
              <div>Observaciones: {obs}</div>
            </section>
          </div>
        )}
      </div>
      <div
        className='w-full flex items-center'
        onClick={() => { setView(!view) }}
      >
        <div
          className='w-full flex justify-center hover:bg-indigo-800 rounded-lg'
        >
          {view && (<IconOpenToUp />)}
        </div>
      </div>
    </div>
  )
}
