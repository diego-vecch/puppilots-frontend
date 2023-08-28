import Image from 'next/image'
import perfil from '../../../../public/perfil.jpg'
import { useState } from 'react'
import { FormUp } from '@/components/FormUp'
import { InfoCardUser } from '../pilot/page'
import { CustomButton } from '@/components/CustomButton'

interface CardUserProps extends InfoCardUser {
  name: string
  lastName: string
  id: string
  userId: string
  dni: string
  phone: string
  email: string
  role: string
}

export const CardUserHome: React.FC<CardUserProps> = (props) => {
  const { name, lastName, id, userId, dni, phone, email, role } = props
  const [clickAct, setClickAct] = useState(false)

  const handleClick = (): void => {
    if (clickAct) {
      setClickAct(false)
    } else {
      setClickAct(true)
    }
  }
  return (
    <div
      className='flex justify-center items-center w-full h-[280px] rounded-lg  bg-blue-900 bg-opacity-40'
    >
      <div className='flex flex-col items-center justify-between pb-10 w-full h-full'>
        <div className='flex justify-center flex-col items-center'>

          <Image
            className='w-28 h-25 mb-3 rounded-full shadow-lg mt-8'
            src={perfil}
            width={600}
            height={600}
            alt='Perfil'
          />

          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            {(name ?? '') + ' ' + (lastName ?? '')}
          </h5>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            Correo: {email}
          </span>
          <span className='hidden text-sm text-gray-500 dark:text-gray-400'>
            Telefono: {phone}
          </span>
          <span className='hidden text-sm text-gray-500 dark:text-gray-400'>
            DNI: {dni}
          </span>
          <span className='hidden text-sm text-gray-500 dark:text-gray-400'>
            Role: {role}
          </span>
        </div>
        <div className='w-2/3'>
          <CustomButton onClick={() => {
            handleClick()
          }}
          >Actualiza tu información
          </CustomButton>
        </div>
      </div>
      {
        clickAct
          ? (
            <FormUp
              setClickAct={setClickAct}
              clickAct={clickAct}
              id={id}
              userId={userId}
              lastName={lastName}
              name={name}
            />
            )
          : (
            <div />
            )
      }
    </div>
  )
}
