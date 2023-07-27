type AuxProps = {
  children: React.ReactNode
}

const ButtonWhite: React.FC<AuxProps> = ({ children }) => {
  return (
    <button className='bg-slate-200 hover:bg-slate-50 hover:text-pup-text_b_1 rounded-md text-slate-900 px-3'>
      {children}
    </button>
  )
}
export default ButtonWhite
