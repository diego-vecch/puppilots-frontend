export type JWT = {
  access_token: string
}
export type Address = {
  country: string
  city: string
  street: string
  number: string
  floor: string
  departament: string
  lat: string
  lng: string
  reference: string
}
export type USER = {
  userId: string
  id: string
  role: string
  email: string
  name: string
  lastName: string
  dni: string
  phone: string
  address: Address
}
