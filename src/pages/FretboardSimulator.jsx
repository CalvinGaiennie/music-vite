import AppNav from "../components/AppNav";
import Fretboard from "../components/Fretboard";
import FretboardSettings from "../components/FretboardSettings";

function FretboardSimulator() {
  return (
    <div>
      <AppNav />
      <div className="flex">
        <FretboardSettings />
        <Fretboard />
      </div>
    </div>
  );
}

export default FretboardSimulator;
