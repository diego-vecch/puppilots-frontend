
import { create } from 'zustand'

export interface PuppetData {
  puppetname: string
  size: string
  breed: string
  beginDate: string
  street: string
  name: string
  lastName: string
  walksid: string
}

export interface PuppetState {
  getPuppet: () => Promise<PuppetData[]>
  puppets: PuppetData[]
  postWalk: (id: string) => Promise<any>
}

export const usePuppetStore = create<PuppetState>(() => ({
  puppets: [], // Estado para almacenar las marionetas
  filter: '', // Estado para almacenar el valor del filtro

  getPuppet: async () => {
    const res = await fetch('https://puppilots.com/api/walk/offer', {
      headers: { Authorization: 'Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBpbG90QGdtYWlsLmNvbSIsInN1YiI6IjQxMTEyNWVlLTY4NTctNDU2ZS05MDJmLTA4ZmE0ZDk3M2E4NSIsInJvbGUiOiJQSUxPVCIsImlhdCI6MTY5MzEwODcxMywiZXhwIjoxNjkzMTA5MzEzfQ.vJF04wLtBaQbFStudjOArYz4gReNFwh1mynHp_uldes' }
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
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBpbG90QGdtYWlsLmNvbSIsInN1YiI6IjQxMTEyNWVlLTY4NTctNDU2ZS05MDJmLTA4ZmE0ZDk3M2E4NSIsInJvbGUiOiJQSUxPVCIsImlhdCI6MTY5MzE2ODc2NiwiZXhwIjoxNjkzMTY5MzY2fQ.CKxkDBLAhiyH3hfOvJf3XbJu3ZHH3-F8oW4aknXpj-I',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          walkId: `${id}`
        })
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
      } else {
        console.error('Failed to postulate walk')
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
