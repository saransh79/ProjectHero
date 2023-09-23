import styles from "./rating-section.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "@mui/material";
import { reviewsApi } from "@/Api's";

interface Review {
  rating: number;
  description: string;
  createdAt: string;
  ratingId: string;
  reviewerName: string
}

interface ReviewsResponse {
  payload: {
    reviews: Review[];
    pageNumber: number;
    pageSize: number;
    hasMore: boolean;
  };
}

const RatingSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    fetchReviews();
  }, [pageNumber]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get<ReviewsResponse>(
        `${reviewsApi}6461f84b54ec61921d974f5d/reviews?page=${pageNumber}&size=${pageSize}`
      );
      const newReviews = response.data.payload.reviews;

      if (pageNumber === 1) {
        setReviews(newReviews);
      } else {
        setReviews([...reviews, ...newReviews]);
      }
      setHasMore(response.data.payload.hasMore);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPageNumber(newPage);
  };

  return (
    <div className={styles.frameParent}>
      <div className={styles.detailsParent}>
        <div className={styles.details}>
          <div className={styles.ratingsReviews1}>{`Ratings & Reviews`}</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.interfaceStarParent}>
                  <img
                    className={styles.interfaceStar20}
                    alt=""
                    src="assets/Star.svg"
                  />
                  <img
                    className={styles.interfaceStar20}
                    alt=""
                    src="assets/Star.svg"
                  />
                  <img
                    className={styles.interfaceStar20}
                    alt=""
                    src="assets/Star.svg"
                  />
                  <img
                    className={styles.interfaceStar20}
                    alt=""
                    src="assets/Star.svg"
                  />
                  <img
                    className={styles.interfaceStar20}
                    alt=""
                    src="assets/StarEmpty.svg"
                  />
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div}>4.5</div>
              </div>
            </div>
            <div className={styles.globalRatings}>out of 5</div>
          </div>
        </div>
        <div className={styles.globalRatings}>15 global ratings</div>
      </div>
      <div className={styles.frameParent1}>
        {reviews.map((review) => {
          return (
            <div>
              <div className={styles.woremIpsumDolorSitAmetCoParent}>
                <div className={styles.irfanKhan}>{review.reviewerName}</div>

                <div className={styles.frameWrapper1}>
                  <div className={styles.interfaceStarParent}>
                    {Array.from({ length: review.rating }, (_, index) => (
                      <img
                        key={index}
                        className={styles.interfaceStar21}
                        alt=""
                        src="assets/Star.svg"
                      />
                    ))}

                    {Array.from({ length: 5 - review.rating }, (_, index) => (
                      <img
                        key={index}
                        className={styles.interfaceStar21}
                        alt=""
                        src="assets/StarEmpty.svg"
                      />
                    ))}
                  </div>
                </div>
                <div className={styles.woremIpsumDolor3}>
                  {review.description}
                </div>
                <div className={styles.postedOn123}>
                  Posted on: {review.createdAt}
                </div>
              </div>
              <div className={styles.lineDiv} />
            </div>
          );
        })}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}>
          <Pagination
            count={Math.ceil(reviews.length / pageSize)}
            page={pageNumber}
            onChange={handlePageChange}
            // color="primary"
            variant="outlined"
            // shape="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
