import { LabelForm } from '@/components/LabelForm'
import { CustomInput } from '@/components/CustomInput'
import { useEffect, useState, useCallback, useContext } from 'react'
import { data } from 'autoprefixer'
import { redirect } from 'next/navigation'
import { ContextUser } from '@/context/ContextUser'
import { USER, JWT } from '@/types/userSession'

export const FormRegisterPilot: React.FC = () => {
  const { setInfoUser } = useContext(ContextUser)
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

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInfoPilot({
      ...infoPilot,
      [e.target.name]: e.target.value
    })
  }

  const nextPartTwo = useCallback((): void => {
    if (infoPilot.name === '' && infoPilot.lastName === '' && infoPilot.phone === '') {
      setRequiredError({
        msg: 'Campo obligatorio',
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
        msg: 'Campo obligatorio',
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

    console.log(infoPilot)
  }, [infoPilot])

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
    console.log(infoPilot, data)
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
    const linkPilotRegister = process.env.NEXT_PUBLIC_PILOT_REGISTER as string
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
              latitude: infoPilot.lat,
              longitude: infoPilot.lng,
              references: infoPilot.reference
            }

          })
        }).then(async (res) => {
          const data = await res.json()
          if (res.ok) {
            setRegisterOk(true)
          }
          return data as JWT
        })
      }
      void fetchRegister().then((data) => {
        setToken(data.access_token)
      })
    }
  }, [sendData, infoPilot])
  useEffect(() => {
    const linkUserVerifyToken = process.env.NEXT_PUBLIC_USER_VERIFY_TOKEN as string
    if (registerOk) {
      const getInfoUserFromToken = async (): Promise<USER> => {
        return await fetch(`${linkUserVerifyToken}`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({
            token
          })
        }).then(
          async (res) => {
            const data = await res.json()
            return data as USER
          }
        )
      }
      void getInfoUserFromToken().then(res => {
        sessionStorage.setItem('email', res.email)
        sessionStorage.setItem('isLogged', 'true')
        setInfoUser({
          isLogged: true,
          mail: res.email
        })
      })
      if (token !== '') {
        const rol = 'pilot'
        redirect(`/home/${rol}`)
      }
    }
  }, [registerOk, token, setInfoUser])
  return (
    <form onSubmit={handleSubmit} className='w-full h-full grid m-0 [&>section]:py-2'>
      <section className='w-full flex justify-center'>
        <div className='flex justify-between w-[70%]'>
          <div className={colorNumber.one}>1</div>
          <div className={colorNumber.two}>2</div>
          <div className={colorNumber.three}>3</div>
          <div className={colorNumber.four}>4</div>
        </div>
      </section>
      {partForm.one && (
        <section>
          <section className='h-[85px] w-full'>
            <LabelForm>
              <div className='flex'><p>Nombre</p>
                {requiredError.name.value && (<p className='text-red-400'>&nbsp;({requiredError.msg})</p>)}
              </div>
            </LabelForm>
            <CustomInput onChange={inputChange} value={infoPilot.name} name='name' type='text' placeholder='ejemplo: Juan' />
          </section>
          <section className='h-[85px] w-full'>
            <LabelForm>
              <div className='flex'><p>Apellido</p>
                {requiredError.lastName.value && (<p className='text-red-400'>&nbsp;({requiredError.msg})</p>)}
              </div>
            </LabelForm>
            <CustomInput onChange={inputChange} value={infoPilot.lastName} name='lastName' type='text' placeholder='ejemplo: Martinez' />
          </section>
          <section className='h-[85px] w-full'>
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
              <button onClick={nextPartTwo} type='submit'>siguiente</button>
            </div>
          </div>
        </section>)}
      {partForm.two && (
        <section>
          <section className='h-[85px] w-full'>
            <LabelForm><div className='flex'><p>Ubicación - Latitud</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div></LabelForm>
            <CustomInput onChange={inputChange} value={infoPilot.lat} name='lat' type='text' placeholder='ejemplo: 34.444' />
          </section>
          <section className='h-[85px] w-full'>
            <LabelForm><div className='flex'><p>Ubicación - Longitud</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div></LabelForm>
            <CustomInput onChange={inputChange} value={infoPilot.lng} name='lng' type='email' placeholder='ejemplo: juan-juan@gmail.com' />
          </section>
          <div className='flex items-center justify-center'>
            <div className='text-center pt-4 pb-3 sm:1/2 md:w-1/4'>
              <button onClick={nextPartThree} type='submit'>siguiente</button>
            </div>
          </div>
        </section>)}
      {partForm.three && (
        <section>
          <section className='h-[80px] w-full'>
            <LabelForm> País </LabelForm>
            <CustomInput onChange={inputChange} value={infoPilot.country} name='country' type='text' placeholder='ejemplo: Argentina' />
          </section>
          <section className='h-[80px] w-full'>
            <LabelForm> Ciudad </LabelForm>
            <CustomInput onChange={inputChange} value={infoPilot.city} name='city' type='text' placeholder='ejemplo: Buenos Aires' />
          </section>
          <section className='flex gap-4 h-[80px] w-full'>
            <div className='w-4/5'>
              <LabelForm><div className='flex'><p>Calle</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div></LabelForm>
              <CustomInput onChange={inputChange} value={infoPilot.street} name='street' type='text' placeholder='ejemplo: Centenario' />
            </div>
            <div>
              <LabelForm><div className='flex'><p>Número</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div> </LabelForm>
              <CustomInput onChange={inputChange} value={infoPilot.number} name='number' type='text' placeholder='ejemplo: 9999' />
            </div>
          </section>
          <section className='flex gap-4 h-[80px] w-full'>
            <div>
              <LabelForm><div className='flex'><p>Piso</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div></LabelForm>
              <CustomInput onChange={inputChange} value={infoPilot.floor} name='floor' type='text' placeholder='ejemplo: 9' />
            </div>
            <div>
              <LabelForm><div className='flex'><p>Departamento</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div></LabelForm>
              <CustomInput onChange={inputChange} value={infoPilot.departament} name='departament' type='text' placeholder='ejemplo: a' />
            </div>
          </section>
          <section>
            <LabelForm><div className='flex'><p>Referencia</p> <p className='text-pup-text_w_3'>&nbsp;(optional)</p></div> </LabelForm>
            <CustomInput onChange={inputChange} value={infoPilot.reference} name='refernce' type='email' placeholder='ejemplo: Portón verde' />
          </section>
          <div className='flex items-center justify-center'>
            <div className='text-center pt-4 pb-3 sm:1/2 md:w-1/4'>
              <button onClick={nextPartFour} type='submit'>siguiente</button>
            </div>
          </div>
        </section>)}
      {partForm.four && (
        <section>
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
          <div className='flex items-center justify-center'>
            <div className='text-center pt-4 pb-3 sm:1/2 md:w-1/4'>
              <button onClick={send} type='submit'>Enviar</button>
            </div>
          </div>
        </section>)}
    </form>
  )
}
