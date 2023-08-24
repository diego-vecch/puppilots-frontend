'use client'
import { createContext, useState } from 'react'

type Data = {
  isLogged: boolean
  mail: string
}

export const ContextUser = createContext({
  infoUser: {
    isLogged: false,
    mail: ''
  },
  setInfoUser: (arg: Data): void => {}
})

type propContext = {
  children: React.ReactNode
}

export const ProviderInfoUser: React.FC<propContext> = ({ children }) => {
  const [infoUser, setInfoUser] = useState<Data>({
    isLogged: false,
    mail: ''
  })

  return (<ContextUser.Provider value={{ infoUser, setInfoUser }}>{children}</ContextUser.Provider>)
}
