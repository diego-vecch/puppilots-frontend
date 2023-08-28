import { create } from 'zustand'

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
    const res = await fetch('https://puppilots.com/api/walk/offer', {
      headers: { Authorization: token }
    }).then(async (response) => {
      const puppet = await response.json()
      return puppet
    })
    return res as PuppetData[]
  },
  postWalk: async (id: string) => {
    try {
      const res = await fetch('https://puppilots.com/api/walk/postulate', {
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
  }

}))

// const tokenStorage = typeof window !== 'undefined' && window.sessionStorage.getItem('token')
// const token = '' ?? tokenStorage
// const cityStorage = typeof window !== 'undefined' && window.sessionStorage.getItem('city')
// const city = '' ?? cityStorage
