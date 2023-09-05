import { NextResponse } from 'next/server'
type Puppet =
  {
    name: string
    customerId: string
    size: string
    breed: string
    sex: string
    observations: string
  }
export async function POST (token: string, linkPuppetRegister: string, infoPuppet: Puppet): Promise<any> {
  /* const linkPuppetRegister = process.env.NEXT_PUBLIC_PUPPET as string */
  const infoUser = JSON.parse(sessionStorage.getItem('info') as string)
  /* const token = sessionStorage.getItem('token') as string */
  const res = await fetch(`${linkPuppetRegister}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name: infoPuppet.name,
      customerId: infoUser.id,
      size: infoPuppet.size,
      breed: infoPuppet.breed,
      sex: infoPuppet.sex,
      observations: infoPuppet.observations
    })
  })

  const data = await res.json()
  sessionStorage.setItem('puppetId', data.access_token)

  return NextResponse.json(data)
}
