function Metronome({ numOfBeats, lengthOfBeat }) {
  const audioPlayer = document.getElementById("metronomeAudioPlayer");

  function startWorkout() {
    setTimeout(() => {
      click();
    }, lengthOfBeat * 1000);
  }

  function click() {
    audioPlayer.load();
    audioPlayer.play();
  }
  return (
    <div>
      <h1>Stick Control Workout</h1>
      <audio
        src="/Assets/StickControlSounds/first.mp3"
        id="metronomeAudioPlayer"
        controls
      >
        Your browser does not support the audio tag.
      </audio>
      <img src="../Assets/StickControlImages/staff.png" width="300px" />
      <p id="rudimentText"></p>
      <div id="imgDiv"></div>
      <div id="measureNumberDiv"></div>
      <button onClick={startWorkout}>Start Workout</button>
      <p>Number Of Beats {numOfBeats}</p>
      <p>{lengthOfBeat} seconds</p>
    </div>
  );
}

export default Metronome;
