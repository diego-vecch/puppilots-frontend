type PropsInput = {
  type: string
  placeholder?: string
  name?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const CustomInput: React.FC<PropsInput> = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input onChange={onChange} value={value} name={name} type={type} placeholder={placeholder} className='text-pup-text_b_1 pl-2 bg-pup-input bg-opacity-100 rounded-lg focus:outline-none w-full py-1 font-open_sans placeholder:italic' />
  )
}
