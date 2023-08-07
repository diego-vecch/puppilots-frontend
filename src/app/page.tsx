'use client'

import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { HomeSection } from '@/components/HomeSection'

export default function Home (): JSX.Element {
  return (
    <main className='flex h-full w-screen flex-col items-center justify-between bg-pup-container bg-gradient-to-t to-25% from-[#8f00ff] via-[#2d0c4d] via-15% to-pup-container'>
      <Menu />
      <HomeSection />
      <div className=' w-full h-[26rem] fixed bottom-0 translate-y-8 bg-gradient-to-t from-[#570799] z-0 opacity-30 to-50%' />
      <Footer />
    </main>
  )
}
