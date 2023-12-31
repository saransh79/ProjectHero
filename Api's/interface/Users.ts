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
    personalDetails: PersonalDetails
  }
  
  export interface PersonalDetails {
    isVerified: boolean
    isMember: boolean
    companyName: string
    city: string
    state: string
    userId: string
    userType: string
    rating: string
    reviewsCount: number
  }
  