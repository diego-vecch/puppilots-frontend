type AuxProps = {
  children: React.ReactNode
}
export const LabelForm: React.FC<AuxProps> = ({ children }) => {
  return (
    <label className='font-lato'>{children}</label>
  )
}
