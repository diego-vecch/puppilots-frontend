type InfoCardUser = {
  name?: string
  mail?: string
}

export const CardUserHome: React.FC<InfoCardUser> = ({ name, mail }) => {
  return (
    <div
      className='w-full h-[450px] rounded-lg border-2 border-pup-blue'
    >
      Tarjeta del usuario
      <p>{name}</p>
      <p>{mail}</p>
      <button>Completa tu información</button>
    </div>
  )
}
