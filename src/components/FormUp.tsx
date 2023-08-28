import { Button, Form, Input } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { usePuppetStore } from '../store/getPuppet'

type InfoForm = {
  name?: string
  lastName?: string
  email?: string
  setClickAct: React.Dispatch<React.SetStateAction<boolean>>
  clickAct: boolean
  phone?: string
  dni?: string
  userId: string
  id: string
}

export type FormValues = {
  name: string
  lastName: string
  phone: string
  direccion: string
  dni: string
  role: string
  email: string
  userId: string
  id: string
  // Otros campos según el formulario
}

export const FormUp: React.FC<InfoForm> = ({
  name, email, lastName, setClickAct,
  clickAct, id, userId, phone, dni
}) => {
  const { putInfo } = usePuppetStore()

  const handleClick = (): void => {
    if (clickAct) {
      setClickAct(false)
    } else {
      setClickAct(true)
    }
  }
  // const valoresSubmit = async (values: FormValues): Promise<void> => {
  //   const { ...a } = values
  //   const body = { ...a, userId, id }
  //   console.log(body)
  //   try {
  //     await putInfo(body)
  //     console.log('Actualización Exitosa!!!')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return (
    <div className='top-1/3 flex flex-col bg-pup-card2 border-2 w-30 m-auto h-auto absolute mt-1 p-10 justify-center items-center rounded-md font-semibold left-35 shadow-lg'>
      <div className='flex justify-between'>

        <div>

          <h1 className='text-1.5xl font-semibold self-center m-3 text-center'>Actualiza tu informacion</h1>
        </div>
        <div>

          <Button className=' text-pup-text_w_1' onClick={handleClick} type='dashed'>X</Button>
        </div>
      </div>
      <Form
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
        onFinish={(values) => {
          const { ...a } = values
          const body = { ...a, userId, id }
          console.log(body)
          putInfo(body)
            .then(() => {
              console.log('Actualización Exitosa!!!')
            })
            .catch(error => {
              console.log(error)
            })
        }}
      >
        <FormItem name='name' label={<span className='text-white'>Nombre:</span>} initialValue={name}>
          <Input />
        </FormItem>
        <FormItem name='lastName' label={<span className='text-white'>Apellido:</span>} initialValue={lastName}>
          <Input />
        </FormItem>
        <FormItem
          name='phone'
          label={<span className='text-white'>Numero de telefono:</span>}
          initialValue={phone}
        >
          <Input className='text-black' type='string' name='phone' />
        </FormItem>
        <Form.Item
          name='dni'
          label={<span className='text-white'>DNI:</span>}
          rules={[
            { required: true, message: 'Por favor ingrese DNI' }
          ]}
          initialValue={dni}
        >
          <Input type='string' name='dni' placeholder='DNI' />
          {/* {errors.user && (<span>{errors.user}</span>)} */}
        </Form.Item>
        <Button htmlType='submit' className='flex items-center justify-center bg-blue-800 text-white w-40 m-auto text-lg font-semibold'>
          Enviar
        </Button>
      </Form>
    </div>
  )
}
