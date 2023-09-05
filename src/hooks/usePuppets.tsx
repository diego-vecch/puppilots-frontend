import { useEffect } from 'react'
import { POST } from '../app/home/client/api/route'
import { redirect } from 'next/navigation'
import { Puppet } from '@/types/puppets'

export const usePuppets = (send: boolean, infoPuppet: Puppet): null => {
  useEffect(() => {
    const token = sessionStorage.getItem('token') as string
    /* const infoUser = JSON.parse(sessionStorage.getItem('info') as string) */
    const linkPuppetRegister = process.env.NEXT_PUBLIC_PUPPET as string
    if (send) {
      void POST(token, linkPuppetRegister, infoPuppet)
      redirect('/home/client')
    }
  }, [send, infoPuppet])
  return null
}
