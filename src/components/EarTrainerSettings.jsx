function EarTrainerSettings() {
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
      <select>
        <option value="easy-only-key-g">Easy Only Key G</option>
        <option value="easy-with-a-capo">Easy With a Capo</option>
        <option value="intermediate">Intermediate</option>
        <option value="full-songs">Full Songs</option>
        <option value="patrick">Patrick</option>
      </select>
      <h3>Guide</h3>
      <p>Explanation of the difficulty levels</p>
    </div>
  );
}

export default EarTrainerSettings;
