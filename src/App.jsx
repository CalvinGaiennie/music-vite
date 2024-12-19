import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FretboardSimulator from "./pages/FretboardSimulator";
import EarTrainer from "./pages/EarTrainer";
import Metronome from "./pages/Metronome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EarTrainer />} />
          <Route path="/fretboard-simulator" element={<FretboardSimulator />} />
          <Route path="/metronome" element={<Metronome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
