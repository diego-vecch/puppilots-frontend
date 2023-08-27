'use client'

import { createContext, useEffect, useState } from 'react'
import { USER } from '@/types/userSession'

type PropsContext = {
  children: React.ReactNode
}

export const ContextUserInfo = createContext({
  infoOfUser: { email: '' },
  setInfoOfUser: (arg: USER): void => {}
})

export const ProviderInfoOfUser: React.FC<PropsContext> = ({ children }) => {
  const infoSessionStorage = typeof window !== 'undefined' && window.sessionStorage.getItem('info')
  const info = infoSessionStorage ?? '{}'
  const infoObject = JSON.parse(info as string)
  const [infoOfUser, setInfoOfUser] = useState<USER>(infoObject)
  useEffect(() => { console.log(infoObject) }, [infoObject])
  return (<ContextUserInfo.Provider value={{ infoOfUser, setInfoOfUser }}>{children}</ContextUserInfo.Provider>)
}
