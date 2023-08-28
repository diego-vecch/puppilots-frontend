import { LabelForm } from '@/components/LabelForm'
import { CustomInput } from '@/components/CustomInput'
import { useEffect, useState, useCallback } from 'react'
import { JWT } from '@/types/userSession'
import { useVerify } from '@/hooks/useVerify'
import { Map, Draggable } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import Image from 'next/image'
import { CustomButton } from '@/components/CustomButton'

export const FormRegisterPilot: React.FC = () => {
  type Anchor = [lat: number, lng: number]
  type Cities = Array<{
    id: number
    name: string
  }>
  type Country = {
    id: number
    name: string
    cities: Cities
  }
  type Places = Country[]
  const [anchor, setAnchor] = useState<Anchor>([-35.616829500882055, -61.70166718749999])
  const [sendData, setSendData] = useState(false)
  const [token, setToken] = useState('')
  const [registerOk, setRegisterOk] = useState(false)
  const [colorNumber, setColorNumber] = useState({
    one: 'text-violet-300',
    two: '',
    three: '',
    four: ''
  })
  const [infoPilot, setInfoPilot] = useState({
    rol: 'PILOT',
    name: '',
    lastName: '',
    dni: '',
    phone: '',

    country: '',
    city: '',
    street: '',
    number: '',
    floor: '',
    departament: '',
    lat: '',
    lng: '',
    reference: '',

    email: '',
    password: '',
    validatePassword: ''
  })
  const [partForm, setPartForm] = useState({
    one: true,
    two: false,
    three: false,
    four: false
  })
  const [intervalAdvance, setIntervalAdvance] = useState({
    toTwo: false,
    toThree: false,
    toFour: false
  })
  const [requiredError, setRequiredError] = useState({
    msg: 'Campo Obligatorio',
    name: {
      value: false
    },
    lastName: {
      value: false
    },
    phone: {
      value: false
    }
  })
  const [place, setPlace] = useState<Places>([])
  const [idCitie, setIdCitie] = useState<number>(0)

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInfoPilot({
      ...infoPilot,
      [e.target.name]: e.target.value
    })
  }

  const selectPlace = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value
    setInfoPilot({
      ...infoPilot,
      [e.target.name]: value
    })
  }

  const nextPartTwo = useCallback((): void => {
    if (infoPilot.name === '' && infoPilot.lastName === '' && infoPilot.phone === '') {
      setRequiredError({
        ...requiredError,
        name: {
          value: true
        },
        lastName: {
          value: true
        },
        phone: {
          value: true
        }
      })
      return
    }
    if (infoPilot.lastName === '') {
      setRequiredError({
        ...requiredError,
        lastName: {
          value: true
        }
      })
      return
    }
    if (infoPilot.name === '') {
      setRequiredError({
        ...requiredError,
        name: {
          value: true
        },
        lastName: {
          value: false
        },
        phone: {
          value: false
        }
      })
      return
    }
    if (infoPilot.name !== '' && infoPilot.phone.length >= 3) {
      setPartForm({
        one: false,
        two: true,
        three: false,
        four: false
      })
      setColorNumber(
        {
          ...colorNumber,
          one: '',
          two: 'text-violet-300'
        }
      )
    }

    if (intervalAdvance.toTwo) {
      setIntervalAdvance({
        ...intervalAdvance,
        toTwo: true
      })
    }
  }, [infoPilot, intervalAdvance, requiredError, colorNumber])

  const nextPartThree = useCallback((): void => {
    setIntervalAdvance({
      toTwo: false,
      toThree: true,
      toFour: false
    })

    setPartForm({
      one: false,
      two: false,
      three: true,
      four: false
    })
    setColorNumber(
      {
        one: '',
        two: '',
        three: 'text-violet-300',
        four: ''
      }
    )
  }, [])

  const nextPartFour = useCallback((): void => {
    setIntervalAdvance({
      toTwo: false,
      toThree: false,
      toFour: true
    })
    if (infoPilot.city !== '') {
      setPartForm({
        one: false,
        two: false,
        three: false,
        four: true
      })
      setColorNumber(
        {
          one: '',
          two: '',
          three: '',
          four: 'text-violet-300'
        }
      )
    }
  }, [infoPilot])

  const send = (): void => {
    setSendData(true)
  }

  useEffect(() => {
    if (intervalAdvance.toTwo) { nextPartTwo() }
  }, [intervalAdvance.toTwo, nextPartTwo])

  useEffect(() => {
    if (intervalAdvance.toThree) { nextPartThree() }
  }, [intervalAdvance.toThree, nextPartThree])

  useEffect(() => {
    if (intervalAdvance.toFour) { nextPartFour() }
  }, [intervalAdvance.toFour, nextPartFour])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }
  useEffect(() => {
    const getPlaces = async (): Promise<any> => {
      return await fetch('https://puppilots.com/api/parameters/country')
        .then(async (res) => {
          const data = await res.json()
          if (res.ok) {
            setPlace(data)
          }
        })
    }
    void getPlaces()
  }, [])
  useEffect(() => {
    for (let index = 0; index < place.length; index++) {
      if (infoPilot.country === place[index].name) {
        setIdCitie(index)
      }
    }
  }, [infoPilot.country, place])

  useEffect(() => {
    const linkPilotRegister = process.env.NEXT_PUBLIC_PILOT_REGISTER as string
    const lat = anchor[0].toString()
    const lng = anchor[1].toString()
    if (sendData) {
      const fetchRegister = async (): Promise<JWT> => {
        return await fetch(`${linkPilotRegister}`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({
            email: infoPilot.email,
            password: infoPilot.password,
            role: infoPilot.rol,
            name: infoPilot.name,
            lastName: infoPilot.lastName,
            dni: infoPilot.dni,
            phone: infoPilot.phone,
            address: {
              country: infoPilot.country,
              city: infoPilot.city,
              street: infoPilot.street,
              number: infoPilot.number,
              floor: infoPilot.floor,
              departament: infoPilot.departament,
              latitude: lat,
              longitude: lng,
              references: infoPilot.reference
            }

          })
        }).then(async (res) => {
          const data = await res.json()
          if (res.ok) {
            setRegisterOk(true)
            sessionStorage.setItem('token', data.access_token)
          }
          return data as JWT
        })
      }
      void fetchRegister().then((data) => {
        setToken(data.access_token)
      })
    }
  }, [sendData, infoPilot, anchor])
  useVerify(registerOk, token)
  return (
    <form onSubmit={handleSubmit} className='w-full h-full flex flex-col m-0 [&>section]:py-1'>
      <section className='w-full flex justify-center h-[44px]'>
        <div className='flex justify-between w-[70%]'>
          <div className={colorNumber.one}>1</div>
          <div className={colorNumber.two}>2</div>
          <div className={colorNumber.three}>3</div>
          <div className={colorNumber.four}>4</div>
        </div>
      </section>
      {partForm.one && (
        <section>
          <section className='h-[80px] w-full'>
            <LabelForm>
              <div className='flex'><p>Nombre</p>
                {requiredError.name.value && (<p className='text-red-400'>&nbsp;({requiredError.msg})</p>)}
              </div>
            </LabelForm>
            <CustomInput onChange={inputChange} value={infoPilot.name} name='name' type='text' placeholder='ejemplo: Juan' />
          </section>
          <section className='h-[80px] w-full'>
            <LabelForm>
              <div className='flex'><p>Apellido</p>
                {requiredError.lastName.value && (<p className='text-red-400'>&nbsp;({requiredError.msg})</p>)}
              </div>
            </LabelForm>
            <CustomInput onChange={inputChange} value={infoPilot.lastName} name='lastName' type='text' placeholder='ejemplo: Martinez' />
          </section>
          <section className='h-[80px] w-full'>
            <LabelForm><div className='flex'><p>DNI</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div></LabelForm>
            <CustomInput onChange={inputChange} value={infoPilot.dni} name='dni' type='number' placeholder='ejemplo: 12345678' />
          </section>
          <section className='h-[80px] w-full'>
            <LabelForm>
              <div className='flex'><p>Teléfono</p>
                {requiredError.name.value && (<p className='text-red-400'>&nbsp;({requiredError.msg})</p>)}
              </div>
            </LabelForm>
            <CustomInput onChange={inputChange} value={infoPilot.phone} name='phone' type='number' placeholder='ejemplo: 12345678' />
          </section>
          <div className='flex items-center justify-center'>
            <div className='text-center pt-4 pb-3 sm:1/2 md:w-1/4'>
              <CustomButton onClick={nextPartTwo} type='submit'>Siguiente</CustomButton>
            </div>
          </div>
        </section>)}
      {partForm.two && (
        <section className='h-full'>
          <div className='h-[90%]'>
            <section className='h-7'><LabelForm><div className='flex'><p>Coloca el icono en tu ubicación</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div></LabelForm></section>
            <div className='bg-sky-100 h-[295px] overflow-hidden w-full flex justify-center items-center rounded-xl'>
              <Map
                provider={osm}
                height={300}
                defaultCenter={[-35.616829500882055, -61.70166718749999]}
                defaultZoom={4}
              >
                <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
                  <Image src='location.svg' width={80} height={95} alt='location!' />
                </Draggable>
              </Map>
            </div>
          </div>

          <div className='h-8 flex items-center justify-center'>
            <div className='text-center pt-4 pb-3 sm:1/2 md:w-1/4'>
              <CustomButton onClick={nextPartThree} type='submit'>Siguiente</CustomButton>
            </div>
          </div>
        </section>)}
      {partForm.three && (
        <section className='h-full'>
          <div className='h-[85%] grid'>
            <section className='h-[45px] w-full'>
              <LabelForm>Seleccione:</LabelForm>
              <select
                name='country' onChange={selectPlace} value={infoPilot.country}
                className=' bg-pup-container ml-4 border-indigo-600 rounded border-2 border-opacity-80'
              >
                <option value='' className='text-center'> - País - </option>
                {place.map(({ name, id }) => (<option value={name} key={id}>{name}</option>))}
              </select>
              {requiredError.name.value && (<p className='text-red-400'>&nbsp;({requiredError.msg})</p>)}
            </section>
            <section className='h-[45px] w-full'>
              <section className='flex'>
                <LabelForm>Seleccione:</LabelForm>
                <select
                  name='city' onChange={selectPlace} value={infoPilot.city}
                  className='bg-pup-container border-indigo-600 ml-4 rounded border-2 border-opacity-80 w-full'
                >
                  <option value='' className='text-center'>- Ciudades -</option>
                  {place[idCitie].cities.map(({ name, id }) => (<option value={name} key={id}>{name}</option>))}
                </select>
              </section>
              {requiredError.name.value && (<p className='text-red-400'>&nbsp;({requiredError.msg})</p>)}
            </section>
            <section className='flex gap-4 h-[70px] w-full'>
              <div className='w-4/5'>
                <LabelForm><div className='flex'><p>Calle</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div></LabelForm>
                <CustomInput onChange={inputChange} value={infoPilot.street} name='street' type='text' placeholder='ejemplo: Centenario' />
              </div>
              <div>
                <LabelForm><div className='flex'><p>Número</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div> </LabelForm>
                <CustomInput onChange={inputChange} value={infoPilot.number} name='number' type='text' placeholder='ejemplo: 9999' />
              </div>
            </section>
            <section className='flex gap-4 h-[70px] w-full'>
              <div>
                <LabelForm><div className='flex'><p>Piso</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div></LabelForm>
                <CustomInput onChange={inputChange} value={infoPilot.floor} name='floor' type='text' placeholder='ejemplo: 9' />
              </div>
              <div>
                <LabelForm><div className='flex'><p>Departamento</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div></LabelForm>
                <CustomInput onChange={inputChange} value={infoPilot.departament} name='departament' type='text' placeholder='ejemplo: a' />
              </div>
            </section>
            <section className='h-[70px] w-full'>
              <LabelForm><div className='flex'><p>Referencia</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div> </LabelForm>
              <CustomInput onChange={inputChange} value={infoPilot.reference} name='refernce' type='email' placeholder='ejemplo: Portón verde' />
            </section>
          </div>
          <div className='h-14 flex items-center justify-center'>
            <div className='text-center pt-2 pb-3 sm:1/2 md:w-1/4'>
              <CustomButton onClick={nextPartFour} type='submit'>Siguiente</CustomButton>
            </div>
          </div>
        </section>)}
      {partForm.four && (
        <section className='h-full grid items-center'>
          <div className='h-[75%] grid items-center'>
            <div>
              <section className='h-[85px] w-full'>
                <LabelForm>Correo</LabelForm>
                <CustomInput onChange={inputChange} value={infoPilot.email} name='email' type='email' placeholder='ejemplo: juan-juan@gmail.com' />
              </section>
              <section className='h-[85px] w-full'>
                <LabelForm>Contraseña</LabelForm>
                <CustomInput onChange={inputChange} value={infoPilot.password} name='password' type='password' placeholder='ejemplo: 34.444' />
              </section>
              <section className='h-[85px] w-full'>
                <LabelForm>Repetir Contraseña</LabelForm>
                <CustomInput onChange={inputChange} value={infoPilot.validatePassword} name='validatePassword' type='password' placeholder='ejemplo: juan-juan@gmail.com' />
              </section>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='text-center pt-4 pb-3 sm:1/2 md:w-1/4'>
              <CustomButton onClick={send} type='submit'>Enviar</CustomButton>
            </div>
          </div>
        </section>)}
    </form>
  )
}
