import { createContext, useEffect, useState } from "react";
// import feedbacks from "../data/FeedbackData";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("data/FeedbackData.json");
    const data = await response.json();
    console.log(data);
    setFeedback(data.feedbacks);
  };

  const [feedback, setFeedback] = useState([]);
  const [editStatus, setEditStatus] = useState({
    item: {},
    edit: false,
  });

  //Delete Event
  const deleteFeedback = (id) => {
    // console.log(id);
    if (window.confirm("Are you sure delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Add Event
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  //Edit event
  const editFeedback = (item) => {
    setEditStatus({
      item: item,
      edit: true,
    });
  };
  //Update event
  const updateFeedback = (id, newFeedback) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...feedback, ...newFeedback } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editStatus,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
