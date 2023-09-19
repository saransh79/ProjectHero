export interface Root {
    payload: Payload
  }
  
  export interface Payload {
    reviews: Review[]
    pageNumber: number
    pageSize: number
    hasMore: boolean
  }
  
  export interface Review {
    rating: number
    description: string
    createdAt: string
    ratingId: string
  }
  