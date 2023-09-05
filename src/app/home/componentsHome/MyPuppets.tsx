import { useEffect, useState } from 'react'
import { CustomButton } from '@/components/CustomButton'
import { CustomInput } from '@/components/CustomInput'
import { usePuppets } from '@/hooks/usePuppets'
import { Puppet, Breed, ResponseMyPuppets } from '@/types/puppets'
import { PuppetCard } from './PuppetCard'

export const MyPuppets: React.FC = () => {
  const [infoMyPuppets, setInfoMyPuppets] = useState<ResponseMyPuppets>([{
    id: '',
    name: '',
    breed: '',
    size: '',
    sex: '',
    observations: ''
  }])
  const [newPuppet, setNewPuppet] = useState(false)
  const [send, setSend] = useState(false)
  const [infoPuppet, setInfoPuppet] = useState<Puppet>({
    name: '',
    customerId: '',
    size: '',
    breed: '',
    sex: '',
    observations: ''
  })
  const [breed, setBreed] = useState<Breed>([{
    id: '',
    name: ''
  }])
  /*   const [viewInfoPuppet, setViewInfoPuppet] = useState(false) */

  const addPuppet = (): void => {
    setNewPuppet(true)
  }

  useEffect(() => {
    const bredd = process.env.NEXT_PUBLIC_BREED as string
    const getBreedPuppet = async (): Promise<any> => {
      return await fetch(bredd).then(
        async (res) => {
          const data = await res.json()
          setBreed(data)
        }
      )
    }
    void getBreedPuppet()
  }, [])
  useEffect(() => {
    const myPuppets = process.env.NEXT_PUBLIC_PUPPET as string
    const token = sessionStorage.getItem('token') as string
    const infoUser = JSON.parse(sessionStorage.getItem('info') as string)
    const id = infoUser.id as string
    const getMyPuppets = async (): Promise<ResponseMyPuppets> => {
      return await fetch(`${myPuppets}/by-customer-id/${id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          Authorization: `Bearer ${token}`
        }
      }).then(
        async (res) => {
          const data = await res.json()
          setInfoMyPuppets(data)
          return data
        }
      )
    }
    void getMyPuppets()
  }, [])

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInfoPuppet({
      ...infoPuppet,
      [e.target.name]: e.target.value
    })
  }
  const selectCharacterPuppet = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value
    setInfoPuppet({
      ...infoPuppet,
      [e.target.name]: value
    })
  }

  const createPuppet = (): void => {
    setSend(true)
  }
  usePuppets(send, infoPuppet)

  return (
    <div
      className='grid w-full rounded-2xl bg-indigo-900 bg-opacity-30 pt-3 px-2 pb-4'
    >
      <section className='flex h-10 justify-between px-2'>
        <div className=''>Mis Mascotas </div>
        <div className='w-1/3'><CustomButton onClick={addPuppet}>+ Agregar</CustomButton></div>
      </section>
      <section className=''>
        <div>
          {newPuppet && (
            <form>
              <section className='flex items-center h-12'>
                <label className='pr-3'>Nombre: </label>
                <CustomInput onChange={inputChange} name='name' type='text' />
              </section>
              <section className='flex items-center h-12'>
                <label className='pr-3' htmlFor=''>Sexo:</label>
                <select
                  name='sex' value={infoPuppet.sex} onChange={selectCharacterPuppet} className='w-full bg-pup-container border-indigo-600 rounded border-2 border-opacity-80'
                ><option value=''> - Seleccionar -</option>
                  <option value='HEMBRA'>Hembra</option>
                  <option value='MACHO'>Macho</option>
                </select>
              </section>

              <section className='flex items-center h-12'>
                <label className='pr-3' htmlFor=''>Raza:</label>
                <select
                  name='breed' value={infoPuppet.breed} onChange={selectCharacterPuppet} className='w-full bg-pup-container border-indigo-600 rounded border-2 border-opacity-80'
                >
                  <option value=''> - Seleccionar -</option>
                  <option value='Mestizo'>Mestizo</option>
                  {breed.map(({ name, id }) => (
                    <option value={name} key={id}>{name}</option>
                  ))}
                </select>
              </section>

              <section className='flex items-center h-12'>
                <label className='pr-3' htmlFor=''>Tamaño:</label>
                <select
                  name='size' value={infoPuppet.size} onChange={selectCharacterPuppet} className='w-full bg-pup-container border-indigo-600 rounded border-2 border-opacity-80'
                ><option value=''> - Seleccionar -</option>
                  <option value='CHICO'>Pequeño</option>
                  <option value='MEDIANO'>Mediano</option>
                  <option value='GRANDE'>Grande</option>
                </select>
              </section>
              <section className='flex items-center h-12'>
                <label className='pr-3'>Observaciones:</label>
                <CustomInput onChange={inputChange} name='observations' type='text' />
              </section>
              <section className='flex justify-center gap-8 h-14 items-center'>
                <section>
                  <div className='w-20'><CustomButton onClick={() => setNewPuppet(false)}>Cancelar</CustomButton></div>
                </section>
                <div className='w-20'><CustomButton onClick={createPuppet}>Listo!</CustomButton></div>
              </section>
            </form>)}
        </div>
      </section>
      <section>
        {infoMyPuppets.map(({ id }, i) => {
          const size = infoMyPuppets[i].size.toLowerCase()
          const upper = size.charAt(0).toUpperCase() + size.substring(1)
          const sex = infoMyPuppets[i].sex.toLowerCase()
          const sexOfPuppet = sex.charAt(0).toUpperCase() + sex.substring(1)
          return (
            <PuppetCard
              key={id}
              name={infoMyPuppets[i].name}
              breed={infoMyPuppets[i].breed}
              size={upper}
              sex={sexOfPuppet}
              observations={infoMyPuppets[i].observations}
            />
          )
        })}
      </section>
    </div>
  )
}
