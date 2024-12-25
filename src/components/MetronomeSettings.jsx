function MetronomeSettings({ setBPM, setNoteType, setNumOfMeasures }) {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <h3>BPM</h3>
      <select onChange={(e) => setBPM(e.target.value)}>
        {Array.from({ length: 161 }, (_, i) => (
          <option key={i} value={i + 40}>
            {i + 40}
          </option>
        ))}
      </select>
      <h3>Note Type</h3>
      <select onChange={(e) => setNoteType(e.target.value)}>
        <option value="4">Quarter</option>
        <option value="8">Eighth</option>
        <option value="16">Sixteenth</option>
      </select>
      <h3>Measures Per Rudiment</h3>
      <select onChange={(e) => setNumOfMeasures(e.target.value)}>
        {Array.from({ length: 25 }, (_, i) => (
          <option key={i} value={(i + 1) * 2}>
            {(i + 1) * 2}
          </option>
        ))}
      </select>
      <div>
        <h1>Rudiments</h1>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
      </div>
    </div>
  );
}

export default MetronomeSettings;
