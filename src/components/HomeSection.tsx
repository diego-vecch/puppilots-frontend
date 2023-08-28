import { SectionOfContent } from './SectionOfContent'
import { SectionSteps } from './SectionSteps'
export function HomeSection (): JSX.Element {
  return (
    <section className='max-w-7xl overflow-hidden w-full relative md:h-full flex flex-col gap-20 z-20'>
      <div className='px-2 flex flex-col py-20 md:py-60 font-lato text-xl justify-center items-center'>
        <div>
          <h1
            className='font-open_sans text-pup-text_w_1 font-extrabold text-4xl md:text-5xl tracking-wide text-center'
          >
            Encuentra el paseo que buscas para tu perro
          </h1>
        </div>
        <div className='py-8'><h3 className=' text-pup-text_w_3 text-2xl font-lato'>Disponible en Argentina, Chile, Colombia, Perú y Venezuela </h3>
        </div>
      </div>
      <div className='px-4 pb-12'>
        <SectionOfContent
          src='/canwalk2.webp'
          alt='Imagen de Cristian Castillo, obtenida de Unplash'
          imgFirst={false}
          titleSection='Beneficios de nuestros clientes'
          item1='Puedes acceder a un paseo para el día y hora que necesite tu mascota'
          item2='Posibilidad de seleccionar al paseador'
          item3='Seguimiento mediante la plataforma durante el paseo de tu perro'
          subTitle='Registrate para poder acceder a todos los servicios de nuestra plataforma'
          nameButton='Registro'
          href='/register-client'
        />
      </div>
      <div className='px-4 pt-10 pb-14'>
        <SectionOfContent
          imgFirst
          src='/canwalk.webp'
          alt='Averiguar dueño de la img y de donde se obtuvo'
          titleSection='Beneficios de trabajar como paseador'
          item1='Puedes ofrecer tus servicios de acuerdo a tu disponibilidad'
          item2='Posibilidad de elegir entre ofertas de paseo'
          item3='Pago cada dos semanas'
          subTitle='Registrate para poder acceder a todos los servicios de nuestra plataforma'
          nameButton='Registro para paseadores'
          href='/register-client'
        />
      </div>
      <div className='px-4 pt-4 pb-32'><SectionSteps /></div>
    </section>
  )
}
