import { Bree_Serif, Open_Sans, Lato } from '@next/font/google'

export const breeSerif = Bree_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-bree-serif'
})

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans'
})

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-lato'
})
