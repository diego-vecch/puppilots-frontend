import { LabelForm } from '@/components/LabelForm'
import { CustomInput } from '@/components/CustomInput'
import { useState, useEffect, useRef } from 'react'
import { JWT } from '@/types/userSession'
import { useVerify } from '@/hooks/useVerify'
import { CustomButton } from '@/components/CustomButton'

export const Form: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verifiedPassword, setVerifiedPassword] = useState('')
  const [error, setError] = useState({
    typeError: '',
    errorCurrent: false
  })
  const [incoincidePassword, setIncoincidePassword] = useState(false)

  const firsInput = useRef(true)
  const [sendData, setSendData] = useState(false)
  const [token, setToken] = useState('')
  const [registerOk, setRegisterOk] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value)
  }
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value)
  }
  const handleChangeVPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setVerifiedPassword(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (password !== verifiedPassword) {
      setIncoincidePassword(true)
      return
    }
    if (password === verifiedPassword) {
      setIncoincidePassword(false)
      setSendData(true)
    }
  }
  useEffect(() => {
    const truePasword = password
    const regex = /[A-Z]/g
    const regexLower = /[a-z]/g
    const regexNumber = /[0-9]/g
    const regexCharactSpecial = /\W|_/g
    const found = truePasword.match(regex)
    const foundLower = truePasword.match(regexLower)
    const foundNumber = truePasword.match(regexNumber)
    const foundCharacSpecial = truePasword.match(regexCharactSpecial)
    if (firsInput.current) {
      firsInput.current = truePasword === ''
      return
    }
    if (truePasword.length < 6) {
      setError({
        typeError: 'Debe poseer al menos 6 carácteres',
        errorCurrent: true
      })
      return
    }
    if (found == null || found?.length === 0) {
      setError({
        typeError: 'Debe poseer al menos una mayuscula',
        errorCurrent: true
      })
      return
    }
    if (foundLower == null || foundLower?.length === 0) {
      setError({
        typeError: 'Debe poseer al menos una minuscula',
        errorCurrent: true
      })
      return
    }
    if (foundNumber == null || foundNumber?.length === 0) {
      setError({
        typeError: 'Debe poseer al menos un numero',
        errorCurrent: true
      })
      return
    }
    if (foundCharacSpecial == null || foundCharacSpecial?.length === 0) {
      setError({
        typeError: 'Debe poseer al menos un carácter especial',
        errorCurrent: true
      })
      return
    }
    if (truePasword.length >= 6) {
      setError({
        typeError: '',
        errorCurrent: false
      })
    }
  }, [email, password, verifiedPassword])
  useEffect(() => {
    const linkClientRegister = process.env.NEXT_PUBLIC_CLIENT_REGISTER as string

    if (sendData) {
      const fetchRegister = async (): Promise<JWT> => {
        return await fetch(`${linkClientRegister}`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({
            email,
            password
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
  }, [sendData, password, email])
  useVerify(registerOk, token)
  return (
    <form onSubmit={handleSubmit} className='w-full h-[75%] grid items-center m-0 '>
      <section>
        <div className='h-[85px] w-full'>
          <LabelForm>Email</LabelForm>
          <CustomInput onChange={handleChange} value={email} name='email' type='email' placeholder='ejemplo: juan-juan@gmail.com' />
        </div>
      </section>
      <section className='[&div]:w-full h-[85px]'>
        <div><LabelForm>Contraseña</LabelForm></div>
        <div><CustomInput onChange={handleChangePassword} value={password} name='firstPassword' type='password' placeholder='ejemplo: 123@Aabcdf#' /></div>
        <div>{error.errorCurrent && (<p className='text-red-400'>*{error.typeError}</p>)}</div>
      </section>
      <section className='[&div]:w-full h-[85px]'>
        <LabelForm>Repetir Contraseña</LabelForm>
        <CustomInput onChange={handleChangeVPassword} value={verifiedPassword} name='reviewPasssword' type='password' />
        {incoincidePassword && (<p className='text-red-400'>* no coinciden las  contraseñas</p>)}
      </section>
      <section className='flex items-center justify-center'>
        <div className='text-center pt-4 pb-3 sm:1/2 md:w-1/4'>
          <CustomButton type='submit'>Enviar</CustomButton>
        </div>
      </section>
    </form>
  )
}
