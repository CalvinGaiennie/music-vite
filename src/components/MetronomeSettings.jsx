import styles from "./MetronomeSettings.module.css";
function MetronomeSettings({ setBPM, setNoteType, setNumOfMeasures }) {
  const rudimentImages = Array.from({ length: 24 }, (_, i) => (
    <img
      key={i}
      src={`/Assets/rudimentimages/rudiment${i + 1}.png`}
      className={styles.bannerImg}
      onClick={() => {}}
      alt={`Rudiment ${i + 1}`}
    />
  ));

  return (
    <div className={styles.settings}>
      <h1>Settings</h1>
      <h3>BPM</h3>
      <select onChange={(e) => setBPM(e.target.value)}>
        {Array.from({ length: 161 }, (_, i) => (
          <option key={i} value={i + 40} selected={i === 80}>
            {i + 40}
          </option>
        ))}
      </select>
      <h3>Note Type</h3>
      <select onChange={(e) => setNoteType(e.target.value)}>
        <option value="4">Quarter</option>
        <option value="8" selected>
          Eighth
        </option>
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
      <div id="imgDiv">
        <h1>Rudiments</h1>
        {rudimentImages}
      </div>
    </div>
  );
}

export default MetronomeSettings;
