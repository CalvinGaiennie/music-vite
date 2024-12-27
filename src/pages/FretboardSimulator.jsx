import { useState } from "react";
import AppNav from "../components/AppNav";
import Fretboard from "../components/Fretboard";
import FretboardSettings from "../components/FretboardSettings";

function FretboardSimulator() {
  const [currentKey, setCurrentKey] = useState("empty");
  const [currentScale, setCurrentScale] = useState("note");

  return (
    <div>
      <AppNav />
      <div className="flex">
        <FretboardSettings
          setCurrentKey={setCurrentKey}
          setCurrentScale={setCurrentScale}
        />
        <Fretboard currentScale={currentScale} currentKey={currentKey} />
        <p>{currentKey}</p>
      </div>
    </div>
  );
}

export default FretboardSimulator;
