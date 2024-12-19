function EarTrainerSettings() {
  const difficulties = {
    GuitarDifficulties: (
      <select>
        <option value="simple-melody">Simple Melody</option>
        <option value="complex-melody">Complex Melody</option>
        <option value="easy-only-key-g">Easy Only Key G</option>
        <option value="easy-with-a-capo">Easy With a Capo</option>
        <option value="intermediate">Intermediate</option>
        <option value="full-songs">Full Songs</option>
        <option value="patrick">Patrick</option>
      </select>
    ),
    BassDifficulties: (
      <select>
        <option value="simple-bassline">Simple Bassline</option>
        <option value="complex-bassline">Complex Bassline</option>
      </select>
    ),
    PianoDifficulties: (
      <select>
        <option value="simple-melody">Simple Melody</option>
        <option value="complex-melody">Complex Melody</option>
        <option value="easy-only-key-c">Easy Only Key C</option>
        <option value="easy-all-keys">Easy All Keys</option>
        <option value="intermediate">Intermediate</option>
        <option value="full-songs">Full Songs</option>
      </select>
    ),
    GuitarAndBassDifficulties: (
      <select>
        <option value="simple-progressions">Simple Progressions</option>
        <option value="complex-progressions">Complex Progressions</option>
      </select>
    ),
    GuitarBassAndDrumsDifficulties: (
      <select>
        <option value="simple-progressions">Simple Progressions</option>
        <option value="complex-progressions">Complex Progressions</option>
      </select>
    ),
    PianoBassAndDrumsDifficulties: (
      <select>
        <option value="simple-progressions">Simple Progressions</option>
        <option value="complex-progressions">Complex Progressions</option>
      </select>
    ),
    GuitarPianoBassAndDrumsDifficulties: (
      <select>
        <option value="simple-progressions">Simple Progressions</option>
        <option value="complex-progressions">Complex Progressions</option>
      </select>
    ),
  };
  return (
    <div className="settings">
      <h1>Settings</h1>
      <h3>Select An Instrument</h3>
      <select>
        <option value="guitar">Guitar</option>
        <option value="bass">Bass</option>
        <option value="piano">Piano</option>
        <option value="guitar-and-bass">Guitar and Bass</option>
        <option value="guitar-bass-and-drums">Guitar, Bass, and Drums</option>
        <option value="piano-bass-and-drums">Piano, Bass, and Drums</option>
        <option value="guitar-piano-bass-and-drums">
          Guitar, Piano, Bass, and Drums
        </option>
      </select>
      <h3>Select a Difficulty</h3>
      {difficulties.GuitarAndBassDifficulties}
      <h3>Guide</h3>
      <p>Explanation of the difficulty levels</p>
    </div>
  );
}

export default EarTrainerSettings;
