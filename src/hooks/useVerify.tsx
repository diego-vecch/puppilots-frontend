import { useState, useEffect, useContext } from 'react'
import { ContextUser } from '@/context/ContextUser'
import { verifyTokenUser } from '../services/verifyTokenUser'
import { redirect } from 'next/navigation'

export const useVerify = (registerOk: boolean, token: string): null => {
  const { setInfoUser } = useContext(ContextUser)
  const [rolUser, setRol] = useState('')
  useEffect(() => {
    const linkUserVerifyToken = process.env.NEXT_PUBLIC_USER_VERIFY as string
    if (registerOk) {
      void verifyTokenUser(token, linkUserVerifyToken).then(res => {
        setRol(res.role.toLowerCase())
        sessionStorage.setItem('email', res.email)
        sessionStorage.setItem('isLogged', 'true')
        setInfoUser({
          isLogged: true,
          mail: res.email
        })
      })
      if (token !== '' && rolUser === 'customer') {
        redirect('/home/client')
        return
      }
      if (token !== '' && rolUser === 'pilot') {
        redirect('/home/pilot')
      }
    }
  }, [registerOk, token, setInfoUser, rolUser])
  return null
}
