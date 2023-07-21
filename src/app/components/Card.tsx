import { Card, Metric, Text } from '@tremor/react'

export default function FileCard (): JSX.Element {
  return (
    <Card className='max-w-xs mx-auto' decoration='top' decorationColor='indigo'>
      <Text> PupPilots</Text>
      <Metric>$ 34,743</Metric>
    </Card>
  )
}
