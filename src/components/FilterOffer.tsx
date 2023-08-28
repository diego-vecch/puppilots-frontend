import { useState } from 'react'

interface FiltroOfferProps {
  applyFilter: (filterValue: string) => void
}

export const FiltroOffer: React.FC<FiltroOfferProps> = ({ applyFilter }) => {
  const [select, setSelect] = useState<string>('0')

  const handlerSize = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const newSize = event.target.value
    setSelect(newSize)
    applyFilter(newSize)
  }

  return (
    <div>
      <select defaultValue='0' name='tamaño' id='tamaño' onChange={handlerSize} className='bg-pup-card2 rounded-md border-solid border-2 border-purple-300 font-lato'>
        <option value={select} disabled className='font-bold from-neutral-800'>
          Filtro por Tamaño
        </option>
        <option>Chico</option>
        <option>Mediano</option>
        <option>Grande</option>
      </select>
    </div>
  )
}
