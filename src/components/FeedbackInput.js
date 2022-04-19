import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackInput = (props) => {
  const [messValidate, setMessValidate] = useState("");
  const [btnDisable, setbtnDisable] = useState(true);
  const { editStatus } = useContext(FeedbackContext);

  useEffect(() => {
    if (editStatus.edit === true) {
      setbtnDisable(false);
    }
  }, [editStatus]);

  const handleChange = (e) => {
    props.setText(e.target.value);
    if (props.text === "") {
      setMessValidate(null);
      setbtnDisable(true);
    } else if (props.text !== "" && props.text.length <= 10) {
      setMessValidate("Message at least 10 character.");
      setbtnDisable(true);
    } else {
      setbtnDisable(false);
      setMessValidate(null);
    }
  };

  return (
    <div className="container">
      <form className="feedback-input" onSubmit={props.addSubmit}>
        <input
          type="text"
          value={props.text}
          placeholder="Write message here"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary" disabled={btnDisable}>
          Send
        </button>
      </form>
      {messValidate && <div className="mess-validate">{messValidate}</div>}
    </div>
  );
};

export default FeedbackInput;
