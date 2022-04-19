import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = (props) => {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <div className="container mb-4">
      <div className="feedback-item">
        <div className="rating">{props.rating}</div>
        <div className="content">{props.text}</div>
        <button className="delete" onClick={() => deleteFeedback(props.id)}>
          <i className="fas fa-times"></i>
        </button>
        <button className="edit" onClick={() => props.edit(props.item)}>
          <i className="fas fa-edit"></i>
        </button>
      </div>
    </div>
  );
};

export default FeedbackItem;
