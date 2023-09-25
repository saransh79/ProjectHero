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
    userId: string
    userType: string
    isVerified: boolean
    isMember: boolean
    name?: string
    city?: string
    state?: string
    rootPersona?: string
    companyName?: string
    profilePicture?: string
  }