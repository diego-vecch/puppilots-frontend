import { usePuppetStore } from '../store/getPuppet'

type CardProps = {
  puppetname: string
  size: string
  breed: string
  beginDate: string
  name: string
  lastName: string
  street: string
  walksid: string
}

export const CardOffer: React.FC<CardProps> = ({ puppetname, size, breed, beginDate, name, lastName, street, walksid }) => {
  const { postWalk } = usePuppetStore()
  const date = new Date(beginDate)

  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const formattedDate = `${Number(day)}-${Number(month)}-${year}`

  // const handlerButton = async (): Promise<any> => {
  //   return await postWalk(id)
  // }

  return (
    <div>
      <div className='p-4 m-10 border-2 rounded-xl border-solid border-purple-300 flex flex-row justify-between bg-pup-card2'>
        <div>
          <div className='[&>h2]:font-light [&>h2]:font-lato'>
            <h1 className=' text-2xl font-extrabold font-lato tracking-widest'>{puppetname}</h1>
            <h2>Tamaño: {size}</h2>
            <h2>Raza: {breed}</h2>
            <h2>Dueño: {name} {lastName}</h2>
            <h2>Direccion: {street}</h2>
            <h2>id: {walksid}</h2>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <h1 className='font-lato'>{formattedDate}</h1>
          <button
            className='font-lato border-2 border-solid border-purple-300 rounded-xl hover:text-pup-text_w_1 hover:bg-pup-button_w' onClick={() => {
              postWalk(walksid).then(() => { console.log('Postulación exitosa') }).catch(error => { console.log(error) })
            }}
          >Postular
          </button>
        </div>
      </div>
    </div>
  )
}
