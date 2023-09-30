import styles from "./rating-section.module.css";
import React, { useEffect, useState } from "react";
import { Pagination, Rating } from "@mui/material";
import { fetchAllReviews } from "@/Api's";
import { Review } from "@/Api's/interface/Reviews";
import { usePathname } from "next/navigation";

const RatingSection: React.FC = () => {
  const url = usePathname();
  const segments = url ? url.split('/') : [];
  const lastSegment = segments.length > 0 ? segments[segments.length - 1] : "";

  const [reviews, setReviews] = useState<Review[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    fetchAllReviews(lastSegment, pageNumber).then((res)=>{
      setReviews(res.data.payload.reviews);
      setPageNumber(parseInt(res.data.payload.pageNumber))
      setHasMore(res.data.payload.hasMore);
    }).catch((error)=>{
      console.error("Error fetching reviews:", error);
    })
  }, [lastSegment, pageNumber]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPageNumber(newPage);
  };
  
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  var averageRating = reviews.length ? totalRating / reviews.length : 0;
  const avgRating= averageRating != 0? parseFloat(averageRating.toFixed(2)) : 0;

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
                    defaultValue={avgRating}
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
        {reviews.map((review, key) => {
          return (
            <div key={key}>
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
            size="small"
            page={pageNumber}
            onChange={handlePageChange}
            disabled={!hasMore}
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
