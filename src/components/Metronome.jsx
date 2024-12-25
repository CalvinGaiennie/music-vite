function Metronome({ numOfBeats, lengthOfBeat }) {
  return (
    <div>
      <h1>Stick Control Workout</h1>
      <img src="../Assets/StickControlImages/staff.png" width="300px" />
      <p id="rudimentText"></p>
      <div id="imgDiv"></div>
      <div id="measureNumberDiv"></div>
      <button id="startButton">Start Workout</button>
      <p>Number Of Beats {numOfBeats}</p>
      <p>{lengthOfBeat} seconds</p>
    </div>
  );
}

export default Metronome;
