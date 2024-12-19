import AppNav from "../components/AppNav";
import Settings from "../components/Settings";

function FretboardSimulator() {
  return (
    <div>
      <AppNav />
      <div className="flex">
        <Settings />
        <h1>Fretboard Simulator</h1>
      </div>
    </div>
  );
}

export default FretboardSimulator;
