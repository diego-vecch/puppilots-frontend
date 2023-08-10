'use client'
import Menu from '../../../components/Menu'
import { CardUserHome } from '@/app/home/componentsHome/CardUserHome'
import { SectionJobOffer } from '../componentsHome/SectionJobOffer'
import { DiaryUser } from '../componentsHome/DiaryUser'

export default function HomePilot (): JSX.Element {
  return (
    <main className='bg-pup-container h-full w-screen justify-center place-items-center overflow-hidden'>
      <div><Menu /></div>
      <div className='w-full h-full overflow-hidden flex justify-center'>
        <section className='border-2 border-pup-purple2 w-full max-w-[1400px] h-full flex'>
          <div className='w-3/12'>
            <div className='px-2 pt-2'>
              <CardUserHome
                name='Usuario 1'
                mail='user1@gmail.com'
              />
            </div>
            <div>card para noticias?</div>
          </div>
          <div className='w-6/12 flex flex-col px-2 pt-2'>
            <div className='h-full'><SectionJobOffer /></div>
            <div className='h-16'>card para un mapa?</div>
          </div>
          <div className='w-3/12 px-2 pt-2'>
            <DiaryUser />
          </div>
        </section>
      </div>
    </main>
  )
}
