export type Puppet =
  {
    name: string
    customerId: string
    size: string
    breed: string
    sex: string
    observations: string
  }
export type Breed = [
  {
    id: string
    name: string
  }
]
export type ResponseMyPuppets = [
  {
    id: string
    name: string
    size: string
    breed: string
    sex: string
    observations: string
  }
]
