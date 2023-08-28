import './globals.css'
import type { Metadata } from 'next'
import { breeSerif, lato, openSans } from './fonts'
import { ProviderInfoUser } from '@/context/ContextUser'
import { ProviderInfoOfUser } from '@/context/ContexUserInfo'

export const metadata: Metadata = {
  title: 'Puppilots.com',
  description: 'Generated with love by Devathon team 3'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='es'>
      <body className={`${lato.variable} font-lato text-white ${breeSerif.variable} font-bree_serif text-white ${openSans.variable} font-open_sans text-white`}>
        <ProviderInfoUser>
          <ProviderInfoOfUser>{children}
          </ProviderInfoOfUser>
        </ProviderInfoUser>
      </body>
    </html>
  )
}
