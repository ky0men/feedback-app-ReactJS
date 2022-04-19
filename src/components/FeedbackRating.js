import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackRating = (props) => {
  const [selected, setSelected] = useState(10);
  const handleChange = (e) => {
    setSelected(+e.target.id);
    props.setRating(+e.target.id);
  };
  const { editStatus } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(editStatus.item.rating);
  }, [editStatus]);

  return (
    <div className="container">
      <div className="feedback-rating d-flex justify-content-between">
        <div className="form-radio">
          <label className="form-radio-label">
            <input
              type="radio"
              name="rating"
              id="1"
              onChange={handleChange}
              checked={selected === 1}
            />{" "}
            1
          </label>
        </div>
        <div className="form-radio">
          <label className="form-radio-label">
            <input
              type="radio"
              name="rating"
              id="2"
              onChange={handleChange}
              checked={selected === 2}
            />{" "}
            2
          </label>
        </div>
        <div className="form-radio">
          <label className="form-radio-label">
            <input
              type="radio"
              name="rating"
              id="3"
              onChange={handleChange}
              checked={selected === 3}
            />{" "}
            3
          </label>
        </div>
        <div className="form-radio">
          <label className="form-radio-label">
            <input
              type="radio"
              name="rating"
              id="4"
              onChange={handleChange}
              checked={selected === 4}
            />{" "}
            4
          </label>
        </div>
        <div className="form-radio">
          <label className="form-radio-label">
            <input
              type="radio"
              name="rating"
              id="5"
              onChange={handleChange}
              checked={selected === 5}
            />{" "}
            5
          </label>
        </div>
        <div className="form-radio">
          <label className="form-radio-label">
            <input
              type="radio"
              name="rating"
              id="6"
              onChange={handleChange}
              checked={selected === 6}
            />{" "}
            6
          </label>
        </div>
        <div className="form-radio">
          <label className="form-radio-label">
            <input
              type="radio"
              name="rating"
              id="7"
              onChange={handleChange}
              checked={selected === 7}
            />{" "}
            7
          </label>
        </div>
        <div className="form-radio">
          <label className="form-radio-label">
            <input
              type="radio"
              name="rating"
              id="8"
              onChange={handleChange}
              checked={selected === 8}
            />{" "}
            8
          </label>
        </div>
        <div className="form-radio">
          <label className="form-radio-label">
            <input
              type="radio"
              name="rating"
              id="9"
              onChange={handleChange}
              checked={selected === 9}
            />{" "}
            9
          </label>
        </div>
        <div className="form-radio">
          <label className="form-radio-label">
            <input
              type="radio"
              name="rating"
              id="10"
              onChange={handleChange}
              checked={selected === 10}
            />{" "}
            10
          </label>
        </div>
      </div>
    </div>
  );
};

export default FeedbackRating;
