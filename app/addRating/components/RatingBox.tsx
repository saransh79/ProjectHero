"use client";
import styles from "./ratingBox.module.css";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { PersonalDetails } from "@/Api's/interface/PersonDetails";
import { postReview } from "@/Api's";

interface Iprops {
  data?: PersonalDetails | null;
}
const RatingBox: React.FC<Iprops> = ({ data }) => {
  const [rating, setRating] = useState(0);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<string>("");
  const [error, setError] = useState<string>("");
  console.log(suggestion);

  const [formData, setFormData] = useState({
    Experience: "",
    Name: "",
    PhoneNumber: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleClick = (e: any) => {
    setSuggestion(e.target.value);
  };

  const handleStarClick = (clickedRating: number) => {
    setRating(clickedRating);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    postReview(reviewData)
      .then((res) => {
        setIsSubmit(true);
      })
      .catch((err) => {
        console.error("Error while posting review: ", err);
        setError(err);
        alert(err);
      });
  };

  const reviewData = {
    userType: data?.userType,
    userId: data?.userId,
    reviewerUserType: data?.userType,
    reviewerUserName: formData.Name,
    reviewerPhoneNumber: formData.PhoneNumber,
    reviewerRating: rating,
    reviewerDescription: formData.Experience,
    reviewerEmail: data?.email,
  };
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <form onSubmit={handleSubmit}>
          {!isSubmit && (
            <div className={styles.frameDiv}>
              <div className={styles.rateYourExperienceWithConParent}>
                <div className={styles.rateYourExperience1}>
                  Rate your experience with “Contractor Company Name”
                </div>
                <div className={styles.starContainer}>
                  <div className={styles.interfaceStarParent}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        onClick={() => handleStarClick(index + 1)}
                        style={{ cursor: "pointer" }}
                      >
                        {index < rating ? (
                          <img
                            src="/assets/StarFilled.png"
                            alt=""
                            className={styles.star}
                          />
                        ) : (
                          <img
                            src="/assets/Star.png"
                            alt=""
                            className={styles.star}
                          />
                        )}
                      </span>
                    ))}
                  </div>
                  <div className={styles.veryBadParent}>
                    <div className={styles.veryBad}>Very bad</div>
                    <div className={styles.veryBad}>Very good</div>
                  </div>
                </div>
              </div>

              {rating < 5 && rating != 0 && (
                <div className={styles.howWasYourOverallExperiencParent}>
                  <div className={styles.suggestions}>
                    <div className={styles.howWasYour1}>
                      What could have been better?
                    </div>
                    <div className={styles.itemsWrapper}>
                      <div
                        className={styles.item}
                        style={{
                          border:
                            suggestion === "Safety"
                              ? "1px solid var(--Primary, #efc41a)"
                              : "none",
                          background:
                            suggestion === "Safety" ? "#fffbea" : "none",
                        }}
                      >
                        <input
                          type="radio"
                          id="Safety"
                          name="categories"
                          value="Safety"
                          onClick={handleClick}
                        />
                        <label htmlFor="Safety">Safety</label>
                      </div>
                      <div
                        className={styles.item}
                        style={{
                          border:
                            suggestion === "Communication"
                              ? "1px solid var(--Primary, #efc41a)"
                              : "none",
                          background:
                            suggestion === "Communication" ? "#fffbea" : "none",
                        }}
                      >
                        <input
                          type="radio"
                          id="Communication"
                          name="categories"
                          value="Communication"
                          onClick={handleClick}
                        />
                        <label htmlFor="Communication">Communication</label>
                      </div>
                      <div
                        className={styles.item}
                        style={{
                          border:
                            suggestion === "Food and Stay"
                              ? "1px solid var(--Primary, #efc41a)"
                              : "none",
                          background:
                            suggestion === "Food and Stay" ? "#fffbea" : "none",
                        }}
                      >
                        <input
                          type="radio"
                          id="Food"
                          name="categories"
                          value="Food and Stay"
                          onClick={handleClick}
                        />
                        <label htmlFor="Food">Food and Stay</label>
                      </div>
                      <div
                        className={styles.item}
                        style={{
                          border:
                            suggestion === "Professionalism"
                              ? "1px solid var(--Primary, #efc41a)"
                              : "none",
                          background:
                            suggestion === "Professionalism"
                              ? "#fffbea"
                              : "none",
                        }}
                      >
                        <input
                          type="radio"
                          id="Professionalism"
                          name="categories"
                          value="Professionalism"
                          onClick={handleClick}
                        />
                        <label htmlFor="Professionalism">Professionalism</label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.howWasYourOverallExperiencParent}>
                <div className={styles.experience}>
                  <div className={styles.howWasYour1}>
                    How was your overall experience ? (100% Secure)
                  </div>
                  <div className={styles.sl12202147430151Parent}>
                    <img
                      className={styles.sl12202147430151Icon}
                      alt=""
                      src="/assets/sl_122021_47430_15 1.png"
                    />
                    <b className={styles.label}>100% SECURE</b>
                  </div>
                </div>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  placeholder="Kindly share details about their payment speed, paper work,  professionalism etc"
                  multiline
                  fullWidth
                  rows={4}
                  name="Experience"
                  value={formData.Experience}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.howWasYourOverallExperiencParent}>
                <div className={styles.experience}>
                  <div className={styles.howWasYour1}>
                    Your Name (we will never share your name)
                  </div>
                </div>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  placeholder="Enter your name"
                  fullWidth
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.howWasYourOverallExperiencParent}>
                <div className={styles.experience}>
                  <div className={styles.howWasYour1}>
                    Your Phone No. (we will never share your number)
                  </div>
                  <div className={styles.sl12202147430151Parent}>
                    <img
                      className={styles.sl12202147430151Icon}
                      alt=""
                      src="/assets/sl_122021_47430_15 1.png"
                    />
                    <b className={styles.label}>100% SECURE</b>
                  </div>
                </div>

                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  placeholder="9898989898"
                  fullWidth
                  type="number"
                  name="PhoneNumber"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                />
                {/* <button className={styles.verifyWrapper}>Verify</button> */}
              </div>
            </div>
          )}

          {/* <button className={styles.ctaWrapper}>Submit</button> */}
          {!isSubmit && (
            <button type="submit" className={styles.ctaWrapper2}>
              Submit
            </button>
          )}
        </form>

        {isSubmit && (
          <div className={styles.submitted_card}>
            <div className={styles.submitted_content}>
              <div className={styles.component}>
                <div className={styles.heading}>
                  Rating Submitted Successfully!
                </div>
                <div className={styles.subheadings}>
                  <div className={styles.subheading}>
                    We have received your rating.
                  </div>
                  <div className={styles.subheading}>
                    Once approved, the same will be visible on the contractor
                    profile.
                  </div>
                </div>
              </div>
              <div className={styles.component}>
                <button
                  className={styles.ctaWrapper2}
                  onClick={() => setIsSubmit(false)}
                >
                  Add another review
                </button>
                <div className={styles.gotohome}>
                  <a href={"/"}>Go to home</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingBox;
