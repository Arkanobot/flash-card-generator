import { Routes, Route } from "react-router-dom";

//css
import "./App.css";

//components
import Header from "./components/Header";
import Main from "./components/Main";
import FlashCardDetails from "./components/FlashCardDetails";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/*temp routes to be deleted at the end*/}
        <Route path={"/flashcards/group/:id"} element={<FlashCardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
