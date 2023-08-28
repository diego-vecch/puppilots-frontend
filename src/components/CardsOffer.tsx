import { PuppetData } from '../store/getPuppet'
import { CardOffer } from './CardOffer'

interface CardsOfferProps {
  data: PuppetData[] // Declare the prop

}

export const CardsOffer: React.FC<CardsOfferProps> = ({ data }) => {
  console.log(data)

  return (
    <div>
      {data.map(({ puppetName, size, breed, beginDate, street, lastName, name, walkId }, index) => {
        return <CardOffer key={index} size={size} breed={breed} puppetName={puppetName} beginDate={beginDate} street={street} lastName={lastName} name={name} walkId={walkId} />
      })}

    </div>
  )
}
