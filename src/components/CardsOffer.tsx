import { PuppetData } from '../store/getPuppet'
import { CardOffer } from './CardOffer'

interface CardsOfferProps {
  data: PuppetData[] // Declare the prop
}

export const CardsOffer: React.FC<CardsOfferProps> = ({ data }) => {
  console.log(data)

  return (
    <div>
      {data.map(({ puppetname, size, breed, beginDate, street, lastName, name, walksid }, index) => {
        return <CardOffer key={index} size={size} breed={breed} puppetname={puppetname} beginDate={beginDate} street={street} lastName={lastName} name={name} walksid={walksid} />
      })}

    </div>
  )
}
