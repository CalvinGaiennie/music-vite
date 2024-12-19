function MetronomeSettings() {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <h3>BPM</h3>
      <select>
        {Array.from({ length: 161 }, (_, i) => (
          <option key={i} value={i + 40}>
            {i + 40}
          </option>
        ))}
      </select>
      <h3>Note Type</h3>
      <select>
        <option value="quarter">Quarter</option>
        <option value="eighth">Eighth</option>
        <option value="sixteenth">Sixteenth</option>
      </select>
      <h3>Measures Per Rudiment</h3>
      <select>
        {Array.from({ length: 25 }, (_, i) => (
          <option key={i} value={(i + 1) * 2}>
            {(i + 1) * 2}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MetronomeSettings;
