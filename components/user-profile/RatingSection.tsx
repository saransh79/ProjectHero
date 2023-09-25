import styles from "./rating-section.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Rating } from "@mui/material";
import { reviewsApi } from "@/Api's";
import { Review, ReviewsResponse } from "@/Api's/interface/Reviews";


const RatingSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [allReviews, setAllReviews] = useState<Review[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    fetchReviews();
  }, [pageNumber]);

  useEffect(() => {
    axios
      .get<ReviewsResponse>(`${reviewsApi}6461f84b54ec61921d974f5d/reviews`)
      .then((response) => {
        setAllReviews(response.data.payload.reviews);

      }).catch(error=>{
        console.error(error)
      })
  }, []);

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
  const totalRating = allReviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / allReviews.length;

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
                  {averageRating && <Rating
                    name="half-rating-read"
                    defaultValue={averageRating}
                    precision={0.5}
                    readOnly
                  />}
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div}>{averageRating}</div>
              </div>
            </div>
            <div className={styles.globalRatings}>out of 5</div>
          </div>
        </div>
        <div className={styles.globalRatings}>
          {reviews.length} global ratings
        </div>
      </div>
      <div className={styles.frameParent1}>
        {reviews.map((review) => {
          return (
            <div>
              <div className={styles.woremIpsumDolorSitAmetCoParent}>
                <div className={styles.irfanKhan}>{review.reviewerName}</div>

                <div className={styles.frameWrapper1}>
                  <div className={styles.interfaceStarParent}>
                    <Rating name="read-only" value={review.rating} readOnly />
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
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
