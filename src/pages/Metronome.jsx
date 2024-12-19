import AppNav from "../components/AppNav";
import MetronomeSettings from "../components/MetronomeSettings";

function Metronome() {
  return (
    <div>
      <AppNav />
      <div className="flex">
        <MetronomeSettings />
        <div>
          <h1>Stick Control Workout</h1>
          <img src="../Assets/StickControlImages/staff.png" width="300px" />
          <p id="rudimentText"></p>
          <div id="imgDiv"></div>
          <div id="measureNumberDiv"></div>
        </div>
      </div>
    </div>
  );
}

export default Metronome;
