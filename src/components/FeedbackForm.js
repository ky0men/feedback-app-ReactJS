import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackInput from "./FeedbackInput";
import FeedbackRating from "./FeedbackRating";
import { v4 as idv4 } from "uuid";

const FeedbackForm = () => {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  const { addFeedback, editStatus, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (editStatus.edit === true) {
      setRating(editStatus.item.rating);
      setText(editStatus.item.text);
    }
  }, [editStatus]);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    let newFeedback = {
      rating: rating,
      text: text,
    };
    newFeedback.id = idv4();
    if (editStatus.edit === true) {
      updateFeedback(editStatus.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }
    setText("");
  };

  return (
    <div className="container">
      <div className="feedback-form">
        <div className="container">
          <h3 className="text-center">
            How would you rate your services with us?
          </h3>
          <FeedbackRating
            rating={rating}
            setRating={setRating}
          ></FeedbackRating>
          <FeedbackInput
            addSubmit={handleAddSubmit}
            text={text}
            setText={setText}
          ></FeedbackInput>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
