import { create } from 'zustand'
import { FormValues } from '@/components/FormUp'
import { InfoCardUser } from '@/app/home/pilot/page'

export interface PuppetData {
  puppetName: string
  size: string
  breed: string
  beginDate: string
  street: string
  name: string
  lastName: string
  walkId: string
}

export interface PuppetState {
  getPuppet: () => Promise<PuppetData[]>
  puppets: PuppetData[]
  postWalk: (id: string) => Promise<any>
  putInfo: (values2: FormValues) => Promise<any>
}
interface State extends PuppetState {
  showAlert: boolean
  alertMessage: string
  setAlert: (show: boolean, message: string) => void
}

const token = typeof sessionStorage !== 'undefined' ? `Bearer ${sessionStorage.getItem('token') ?? ''}` : ''

export const usePuppetStore = create<State>((set) => ({
  puppets: [],
  filter: '',
  showAlert: false,
  alertMessage: '',
  setAlert: (show, message) => {
    set({ showAlert: show, alertMessage: message })
  },
  getPuppet: async () => {
    const linkGetWalk = process.env.NEXT_PUBLIC_WALK_OFFER as string
    const res = await fetch(`${linkGetWalk}`, {
      headers: { Authorization: token }
    }).then(async (response) => {
      const puppet = await response.json()
      return puppet
    })
    return res as PuppetData[]
  },
  postWalk: async (id: string) => {
    const linkPostWalk = process.env.NEXT_PUBLIC_WALK_POSTULATE as string
    try {
      const res = await fetch(`${linkPostWalk}`, {
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          walkId: `${id}`
        })
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        set({ showAlert: true, alertMessage: 'Postulación Exitosa' })
      } else {
        console.error('Failed to postulate walk')
        set({ showAlert: true, alertMessage: 'Ya te has postulado' })
      }
    } catch (error) {
      console.error('Error posting walk:', error)
    }
  },

  putInfo: async (values2: FormValues) => {
    const linkPostWalk = process.env.NEXT_PUBLIC_PATCH_PILOT as string
    const infoString = sessionStorage.getItem('info') ?? ''
    const info: InfoCardUser = JSON.parse(infoString)

    try {
      const res = await fetch(`${linkPostWalk}/${info.userId}`, {
        method: 'PATCH',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: values2.userId,
          id: values2.id,
          role: values2.role,
          email: values2.email,
          name: values2.name,
          lastName: values2.lastName,
          dni: values2.dni,
          phone: values2.phone,
          address: info.address
        })
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        set({ showAlert: true, alertMessage: 'Actualización Exitosa!!!' })
        // sessionStorage.setItem('info', data.stringify())
      } else {
        console.error('Failed to postulate walk')
        set({ showAlert: true, alertMessage: '' })
      }
    } catch (error) {
      console.error('Error posting walk:', error)
    }
  }

}))

// const tokenStorage = typeof window !== 'undefined' && window.sessionStorage.getItem('token')
// const token = '' ?? tokenStorage
// const cityStorage = typeof window !== 'undefined' && window.sessionStorage.getItem('city')
// const city = '' ?? cityStorage
