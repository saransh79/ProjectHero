export interface Root {
    payload: Payload
  }
  
  export interface Payload {
    customers: Customer[]
    pageNumber: number
    pageSize: number
    hasMore: boolean
  }
  
  export interface Customer {
    name: string
    userId: string
    userType: string
    city: string
    state: string
    isVerified: boolean
    isMember: boolean
    rootPersona: string
    companyName?: string
    profilePicture?: string
  }
  