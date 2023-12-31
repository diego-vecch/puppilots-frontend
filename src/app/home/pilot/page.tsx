'use client'
import Menu from '../../../components/Menu'
import { CardUserHome } from '@/app/home/componentsHome/CardUserHome'
import { SectionJobOffer } from '../componentsHome/SectionJobOffer'
import { DiaryUser } from '../componentsHome/DiaryUser'
import { Address } from '@/types/userSession'

export type InfoCardUser = {
  name: string
  email: string
  lastName: string
  phone: string
  dni: string
  role: string
  address: Address
  id: string
  userId: string
}

export default function HomePilot (): JSX.Element {
  const infoString = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('info') ?? '{}' : '{}'
  const info: InfoCardUser = JSON.parse(infoString)

  return (
    <main className='bg-pup-container h-full w-screen justify-center place-items-center overflow-hidden'>
      <div><Menu /></div>
      <div className='w-full h-full overflow-hidden flex justify-center'>
        <section className='border-2 border-pup-purple2 w-full max-w-[1400px] h-full flex'>
          <div className='w-3/12'>
            <div className='px-2 pt-2'>
              <DiaryUser />

            </div>
            <div>card para noticias?</div>
          </div>
          <div className='w-6/12 flex flex-col px-2 pt-2'>
            <div className='h-full'><SectionJobOffer /></div>
            <div className='h-16'>card para un mapa?</div>
          </div>
          <div className='w-3/12 px-2 pt-2'>
            <CardUserHome
              id={info.id} userId={info.userId} lastName={info.lastName}
              name={info.name} email={info.email} dni={info.dni} phone={info.phone} role={info.role} address={info.address}
            />
          </div>
        </section>
      </div>
    </main>
  )
}
