export interface TSort {
  title: string
}

export interface TAddress {
  city: string
  street: string
  zipcode: string
}

export interface TCompany {
  name: string
}

export interface TUser {
  address: TAddress
  company: TCompany
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
  comment?: string
}
