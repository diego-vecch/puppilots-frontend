import { useEffect, useState } from 'react'
import { CustomButton } from '@/components/CustomButton'
import { CustomInput } from '@/components/CustomInput'

type Puppet =
  {
    name: string
    customerId: string
    size: string
    breed: string
    sex: string
    observations: string
  }
  type Breed = [
    {
      id: string
      name: string
    }
  ]

export const MyPuppets: React.FC = () => {
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

  useEffect(() => {
    sessionStorage.setItem('puppetId', '')
    const linkPuppetRegister = process.env.NEXT_PUBLIC_PUPPET as string
    if (send) {
      const fetchRegister = async (): Promise<any> => {
        return await fetch(`${linkPuppetRegister}`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({
            name: infoPuppet.name,
            customerId: infoPuppet.customerId,
            size: infoPuppet.size,
            breed: infoPuppet.breed,
            sex: infoPuppet.sex,
            observations: infoPuppet.observations
          })
        }).then(async (res) => {
          const data = await res.json()
          if (res.ok) {
            window.sessionStorage.setItem('puppetId', data.access_token)
          }
          return data
        })
      }
      void fetchRegister().then((data) => { sessionStorage.setItem('puppetId', data.access_token) })
    }
  }, [send, infoPuppet])
  const addPuppet = (): void => {
    setNewPuppet(true)
  }
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
    </div>
  )
}
