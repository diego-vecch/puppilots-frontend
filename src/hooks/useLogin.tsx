import { useEffect, useState } from 'react'
import { useVerify } from './useVerify'
import { JWT } from '@/types/userSession'
type LoginUser = {
  email: string
  password: string
}
export const useLogin = (sendData: boolean, loginUser: LoginUser): { error: boolean } => {
  const [token, setToken] = useState('')
  const [registerOk, setRegisterOk] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    const linkUserLogin = process.env.NEXT_PUBLIC_USER_LOGIN as string
    if (sendData) {
      if (loginUser.email !== '' && loginUser.password !== '') {
        const fetchRegister = async (): Promise<JWT> => {
          return await fetch(`${linkUserLogin}`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
              email: loginUser.email,
              password: loginUser.password
            })
          }).then(async (res) => {
            const data = await res.json()
            if (res.ok) {
              setRegisterOk(true)
              sessionStorage.setItem('token', data.access_token)
            }
            return data
          })
        }
        void fetchRegister().then((data) => {
          setToken(data.access_token)
        })
      } else {
        setError(true)
      }
    }
  }, [sendData, loginUser])
  useVerify(registerOk, token)
  return { error }
}
