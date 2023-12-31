'use client'
import Menu from '../../../components/Menu'
import { SectionCreateOffer } from '../componentsHome/SectionCreateOffer'
import { DiaryUser } from '../componentsHome/DiaryUser'
import { MyPuppets } from '../componentsHome/MyPuppets'
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
  return (
    <main className='bg-pup-container h-full w-screen justify-center place-items-center overflow-hidden'>
      <div><Menu /></div>
      <div className='w-full h-full overflow-hidden flex justify-center'>
        <section className=' w-full max-w-[1400px] h-full flex'>
          <div className='w-3/12'>
            <div className='px-2 pt-2'>
              <DiaryUser />

            </div>
          </div>
          <div className='w-6/12 flex flex-col px-2 pt-2'>
            <div className='h-full'><SectionCreateOffer /></div>
          </div>
          <div className='w-3/12 px-2 pt-2 flex flex-col gap-4'>
            <MyPuppets />
          </div>
        </section>
      </div>
    </main>
  )
}
