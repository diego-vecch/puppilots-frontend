import { useEffect, useState } from 'react'
import { CardsOffer } from '../../../components/CardsOffer'
import { FiltroOffer } from '../../../components/FilterOffer'
import { usePuppetStore, PuppetData } from '../../../store/getPuppet'

export const SectionJobOffer: React.FC = () => {
  const { getPuppet } = usePuppetStore()
  const [puppetData, setPuppetData] = useState<PuppetData[]>([])
  const [filteredPuppetData, setFilteredPuppetData] = useState<PuppetData[]>([])

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
