import ButtonWhite from '../components/ButtonWhite'
import Link from 'next/link'
import Image from 'next/image'

type AuxProps = {
  imgFirst: boolean
  src: string
  alt: string
  titleSection: string
  subTitle?: string
  item1: string
  item2?: string
  item3?: string
  item4?: string
  nameButton: string
  href: string
}

export const SectionOfContent: React.FC<AuxProps> = ({ imgFirst, src, alt, titleSection, subTitle, nameButton, item1, item2, item3, href }) => {
  return (

    <div className='w-full'>
      {!imgFirst &&
        (
          <div className='flex w-full h-[350px]'>
            <div className='flex flex-col w-1/2 justify-center h-full pr-1 sm:pr-10 text-sm sm:text-base'>
              <h1 className='text-pup-purple1 text-center font-open_san text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-12'>
                {titleSection}
              </h1>
              <div className='text-pup-text_w_1 font-light flex h-full w-full'>✓ &nbsp;<hr /><p>{item1}</p></div>
              <div className='text-pup-text_w_1 font-light flex h-full'>✓ &nbsp;<hr /><p>{item2}</p></div>
              <div className='text-pup-text_w_1 font-light flex h-full'>✓ &nbsp;<hr /><p>{item3}</p></div>
              <div className='w-full flex justify-start items-center pt-2 pb-6'>
                <h2 className='text-pup-text_w_3 font-open_sans mt-1 text-center w-full'>
                  {subTitle}
                </h2>
              </div>
              <div className='w-full flex justify-center items-center'><div className='p-2'><ButtonWhite><Link href={href}>{nameButton}</Link></ButtonWhite></div></div>
            </div>
            <div className='w-1/2 h-full object-contain pl-10'>
              <Image className='relative h-full w-full overflow-hidden bg-fixed bg-cover bg-no-repeat object-cover rounded-2xl' src={src} alt={alt} width={400} height={600} />
            </div>
          </div>
        )}
      {imgFirst &&
        (
          <div className='flex w-full h-[350px]'>
            <div className='w-1/2 h-full object-contain pr-10'>
              <Image className='relative h-full w-full overflow-hidden bg-fixed bg-cover bg-no-repeat object-cover rounded-2xl' src={src} alt='alt' width={400} height={300} />
            </div>
            <div className='flex flex-col w-1/2 justify-center h-full pl-10 text-base'>
              <h1 className='text-pup-purple1 text-center font-open_san text-xl sm:text-2xl md:text-3xl mb-12'>
                {titleSection}
              </h1>
              <div className='text-pup-text_w_1 font-light flex h-full w-full'>✓ &nbsp;<hr /><p>{item1}</p></div>
              <div className='text-pup-text_w_1 font-light flex h-full'>✓ &nbsp;<hr /><p>{item2}</p></div>
              <div className='text-pup-text_w_1 font-light flex h-full'>✓ &nbsp;<hr /><p>{item3}</p></div>
              <div className='w-full flex justify-start items-center pt-2 pb-6'>
                <h2 className='text-pup-text_w_3 font-open_sans mt-1 text-center w-full'>
                  {subTitle}
                </h2>
              </div>
              <div className='w-full flex justify-center items-center'><div className='p-2'><ButtonWhite><Link href={href}>{nameButton}</Link></ButtonWhite></div></div>
            </div>
          </div>
        )}
    </div>
  )
}
