type AuxProps = {
  children: React.ReactNode
}

const AncoreMenu: React.FC<AuxProps> = ({ children }) => {
  return (
    <a className='bg-pup-menu hover:bg-slate-300 hover:text-pup-text_b_1 rounded-sm text-pup-text_w_1 px-3 py-1'>
      {children}
    </a>
  )
}
export default AncoreMenu
