import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FretboardSimulator from "./pages/FretboardSimulator";
import EarTrainer from "./pages/EarTrainer";
import StickControl from "./pages/StickControl";
import Lessons from "./pages/Lessons";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lessons />} />
          <Route path="/ear-trainer" element={<EarTrainer />} />
          <Route path="/fretboard-simulator" element={<FretboardSimulator />} />
          <Route path="/metronome" element={<StickControl />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
