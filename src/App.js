import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStatus from "./components/FeedbackStatus";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <div className="App">
        <Header></Header>
        <FeedbackForm></FeedbackForm>
        <FeedbackStatus></FeedbackStatus>
        <FeedbackList></FeedbackList>
      </div>
    </FeedbackProvider>
  );
}

export default App;
