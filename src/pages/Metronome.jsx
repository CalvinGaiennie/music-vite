import AppNav from "../components/AppNav";
import Settings from "../components/Settings";

function Metronome() {
  return (
    <div>
      <AppNav />
      <div className="flex">
        <Settings />
        <h1>Metronome</h1>
      </div>
    </div>
  );
}

export default Metronome;
