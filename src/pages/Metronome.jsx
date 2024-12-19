import AppNav from "../components/AppNav";
import MetronomeSettings from "../components/MetronomeSettings";

function Metronome() {
  return (
    <div>
      <AppNav />
      <div className="flex">
        <MetronomeSettings />
        <div>
          <h1>Metronome</h1>
        </div>
        <div className="rudimentContainer">
          <h1>Skip to Rudiment</h1>
        </div>
      </div>
    </div>
  );
}

export default Metronome;
