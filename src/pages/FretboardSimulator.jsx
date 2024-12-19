import AppNav from "../components/AppNav";
import FretboardSettings from "../components/FretboardSettings";

function FretboardSimulator() {
  return (
    <div>
      <AppNav />
      <div className="flex">
        <FretboardSettings />
        <h1>Fretboard Simulator</h1>
      </div>
    </div>
  );
}

export default FretboardSimulator;
