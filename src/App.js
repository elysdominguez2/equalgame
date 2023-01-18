import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import Game from "./pages/Game";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
