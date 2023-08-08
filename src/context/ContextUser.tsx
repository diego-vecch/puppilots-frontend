'use client'
import { createContext, useState } from 'react'

type Data = {
  email: string
  password: string
}

export const ContextUser = createContext({
  infoUser: {},
  setInfoUser: (arg: Data): void => {}
})

type propContext = {
  children: React.ReactNode
}

export const ProviderInfoUser: React.FC<propContext> = ({ children }) => {
  const [infoUser, setInfoUser] = useState<Data>({
    email: '',
    password: ''
  })

  return (<ContextUser.Provider value={{ infoUser, setInfoUser }}>{children}</ContextUser.Provider>)
}
