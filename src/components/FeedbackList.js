import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {
  const { feedback, editFeedback } = useContext(FeedbackContext);
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          rating={item.rating}
          text={item.text}
          id={item.id}
          item={item}
          edit={editFeedback}
        ></FeedbackItem>
      ))}
    </div>
  );
};

export default FeedbackList;
