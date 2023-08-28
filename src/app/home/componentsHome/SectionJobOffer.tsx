import { useEffect, useState } from 'react'
import { CardsOffer } from '../../../components/CardsOffer'
import { FiltroOffer } from '../../../components/FilterOffer'
import { usePuppetStore, PuppetData } from '../../../store/getPuppet'
// import Warning from '../../../components/Warning'
// import Success from '@/components/Success'

export const SectionJobOffer: React.FC = () => {
  const { getPuppet, showAlert, alertMessage, setAlert } = usePuppetStore()
  const [puppetData, setPuppetData] = useState<PuppetData[]>([])
  const [filteredPuppetData, setFilteredPuppetData] = useState<PuppetData[]>([])
  // const [habilitado, setHabilitado] = useState(false)
  // const [error, setError] = useState({
  //   text: '',
  //   alert: false
  // })

  useEffect(() => {
    void fetchData()
  }, [])

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     void fetchData()
  //     const currentFilter = getFilter()
  //     console.log('aca' + currentFilter)
  //     applyFilter(currentFilter)
  //   }, 5000)
  //   return () => {
  //     clearInterval(intervalId)
  //   }
  // })
  const fetchData = async (): Promise<void> => {
    try {
      const data = await getPuppet()
      setPuppetData(data)
      setFilteredPuppetData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const applyFilter = (filterValue: string): void => {
    const filteredData = puppetData.filter((puppet) =>
      puppet.size.toLowerCase().includes(filterValue.toLocaleLowerCase())
    )
    setFilteredPuppetData(filteredData)
  }

  return (
    <section className='w-full rounded-xl border-2 border-purple-300 h-full flex flex-col justify-between'>
      {showAlert && (
        <div className='fixed z-100 flex justify-center items-center bg-pup-card2 border-2 border-purple-300 text-pup-text_w_1 p-15 clip-path-[polygon(0 0, 100% 0, 100% 100%, 0 100%)] text-lg font-semibold w-80 rounded-xl right-0 top-22vh transition duration-1000 ease-in-out h-10'>
          {alertMessage}
          <button className='pl-5' onClick={() => setAlert(false, '')}>Cerrar</button>
        </div>
      )}
      <div className='flex flex-row justify-end items-start m-5'>
        <FiltroOffer applyFilter={applyFilter} />
      </div>
      {filteredPuppetData.length === 0
        ? (
          <div className='flex justify-center items-center'>
            <p>No hay Paseo</p>
          </div>
          )
        : (
          <CardsOffer data={filteredPuppetData} />
          )}
    </section>
  )
}
