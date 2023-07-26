import FileCard from './components/Card'
import { Grid, Col, Card, Text, Metric } from '@tremor/react'
import Header from './components/Header'
export default function Home (): JSX.Element {
  return (
    <main className='flex h-screen w-screen flex-col items-center justify-between bg-pup-container'>
      <Header />
      <section className='rounded-md overflow-hidden w-full relative md:h-full'>
        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className='gap-2'>
          <Col numColSpan={1} numColSpanLg={2}>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 1</Metric>
            </Card>
          </Col>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 2</Metric>
          </Card>
          <Col>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 3</Metric>
            </Card>
          </Col>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 4</Metric>
          </Card>
          <FileCard />
        </Grid>
      </section>
    </main>
  )
}
