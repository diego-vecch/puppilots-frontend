type PropsInput = {
  type: string
  placeholder?: string
}

export const CustomInput: React.FC<PropsInput> = ({ type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className='text-pup-text_b_1 pl-2 bg-pup-input bg-opacity-100 rounded-lg focus:outline-none w-full py-1 font-open_sans placeholder:italic' />
  )
}
