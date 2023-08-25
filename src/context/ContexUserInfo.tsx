'use client'

import { createContext, useEffect, useState } from 'react'
type Data = {}
type PropsContext = {
  children: React.ReactNode
}

export const ContextUserInfo = createContext({
  infoOfUser: {
  },
  setInfoOfUser: (arg: Data): void => {}
})

export const ProviderInfoOfUser: React.FC<PropsContext> = ({ children }) => {
  const info = window.sessionStorage.getItem('info') ?? '{}'
  const infoObject = JSON.parse(info)
  const [infoOfUser, setInfoOfUser] = useState<Data>(infoObject)
  useEffect(() => { console.log(infoObject) }, [infoObject])
  return (<ContextUserInfo.Provider value={{ infoOfUser, setInfoOfUser }}>{children}</ContextUserInfo.Provider>)
}
