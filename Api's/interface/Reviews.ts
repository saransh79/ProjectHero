export interface Review {
  rating: number;
  description: string;
  createdAt: string;
  ratingId: string;
  reviewerName: string;
}

export interface ReviewsResponse {
  payload: {
    reviews: Review[];
    pageNumber: number;
    pageSize: number;
    hasMore: boolean;
  };
}
