import { useEffect } from "react";
import styles from "./EarTrainerSettings.module.css";
function EarTrainerSettings({
  instrument,
  setInstrument,
  difficulty,
  setDifficulty,
  difficulties,
}) {
  function handleInstrumentChange(e) {
    setInstrument(e.target.value);
  }

  function handleDifficultyChange(e) {
    setDifficulty(e.target.value);
  }

  useEffect(() => {
    console.log(difficulty);
  }, [difficulty]);
  return (
    <div className={styles.settings}>
      <h1>Settings</h1>
      <h3>Select An Instrument</h3>
      <select className="instrument-select" onChange={handleInstrumentChange}>
        <option value="Guitar">Guitar</option>
        <option value="Bass">Bass</option>
        <option value="Piano">Piano</option>
        <option value="GuitarAndBass">Guitar and Bass</option>
        <option value="GuitarBassAndDrums">Guitar, Bass, and Drums</option>
        <option value="PianoBassAndDrums">Piano, Bass, and Drums</option>
        <option value="GuitarPianoBassAndDrums">
          Guitar, Piano, Bass, and Drums
        </option>
      </select>
      <h3>Select a Difficulty</h3>
      {difficulties[`${instrument}Difficulties`]}
      <h3>Guide</h3>
      {difficulties[`${instrument}Guide`]}
    </div>
  );
}

export default EarTrainerSettings;
