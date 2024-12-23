function EarTrainerSettings() {
  const notes = [
    "A",
    "A#/Bb",
    "B",
    "C",
    "C#/Db",
    "D",
    "D#/Eb",
    "E",
    "F",
    "F#/Gb",
    "G",
    "G#/Ab",
  ];
  return (
    <div className="settings">
      <h1>Settings</h1>
      <h3>Select a Key</h3>
      <select>
        {notes.map((note) => (
          <option key={note} value={note}>
            {note}
          </option>
        ))}
      </select>
      <h3>Select a Scale</h3>
      <select>
        <option value="note">Note</option>
        <option value="major">Major</option>
        <option value="minor">Minor</option>
        <option value="major-pentatonic">Major Pentatonic</option>
        <option value="minor-pentatonic">Minor Pentatonic</option>
        <option value="major-arpeggio">Major Arpeggio</option>
        <option value="minor-arpeggio">Minor Arpeggio</option>
      </select>
      <h3>Select Pattern</h3>
      <select>
        <option value="full-scale">Full Scale</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default EarTrainerSettings;
