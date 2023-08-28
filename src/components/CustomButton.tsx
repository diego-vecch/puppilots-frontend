type PropsInput = {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
}

export const CustomButton: React.FC<PropsInput> = ({ children, onClick, type }) => {
  return (
    <button
      onClick={onClick} type={type}
      className='text-center text-pup-text_b_1 bg-opacity-100 rounded-lg focus:outline-none w-full font-open_sans bg-slate-200 hover:bg-slate-50 hover:text-purple-700'
    >{children}
    </button>
  )
}
