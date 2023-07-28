import { LogoApp } from './LogoApp'

export default function Footer (): JSX.Element {
  return (
    <>
      <div className='w-full h-64 bg-gradient-to-t from-[#8F00FF] to-[#9000ff00] absolute bottom-10 z-0' />
      <footer className='w-full bg-pup-container rounded-t-[3rem] py-10 z-10'>
        <div className='max-w-[1400px] mx-auto'>
          <LogoApp />
        </div>
      </footer>
    </>
  )
}
