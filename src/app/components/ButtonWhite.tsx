type AuxProps = {
  children: React.ReactNode
}

const ButtonWhite: React.FC<AuxProps> = ({ children }) => {
  return (
    <button className='w-full bg-slate-200 hover:bg-slate-50 hover:text-purple-700 rounded-md text-pup-text_b_1 px-3'>
      {children}
    </button>
  )
}
export default ButtonWhite
