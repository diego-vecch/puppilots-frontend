import { useState } from 'react'
import { CustomButton } from '@/components/CustomButton'
import { CustomInput } from '@/components/CustomInput'
type InfoCardUser = {
  name?: string
  mail?: string
}

export const MyPuppets: React.FC<InfoCardUser> = ({ name, mail }) => {
  const [newPuppet, setNewPuppet] = useState(false)
  const addPuppet = (): void => {
    setNewPuppet(true)
  }
  return (
    <div
      className='grid w-full rounded-2xl bg-indigo-900 bg-opacity-30 pt-3 px-4 pb-4'
    >
      <section className='flex h-10 justify-between'>
        <div>Mis Mascotas </div>
        <div className='w-1/2'><CustomButton onClick={addPuppet}>Agregar mascota</CustomButton></div>
      </section>
      <section className=''>
        <div>
          {newPuppet && (
            <form action='submit'>
              <section className='flex items-center'>
                <label className='pr-3' htmlFor=''>Nombre</label>
                <CustomInput type='text' />
              </section>
              <section className='flex justify-end'>
                <div className='w-12'><CustomButton>Listo!</CustomButton></div>
              </section>
            </form>)}
        </div>
      </section>
    </div>
  )
}
