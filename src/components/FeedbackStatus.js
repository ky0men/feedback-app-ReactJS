import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStatus = () => {
  const { feedback } = useContext(FeedbackContext);
  let reviews = feedback.length;
  let avg =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / reviews;
  return (
    <div className="container d-flex justify-content-between mt-3 mb-5">
      <h4 className="reviews">{reviews} Reviews</h4>
      <h4 className="average">Avarege: {avg}</h4>
    </div>
  );
};

export default FeedbackStatus;
