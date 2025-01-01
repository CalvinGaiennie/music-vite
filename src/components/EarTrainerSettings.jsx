import { useEffect } from "react";
import styles from "./EarTrainerSettings.module.css";

function EarTrainerSettings({
  dispatch,
  instrument,
  difficulty,
  difficulties,
}) {
  function handleInstrumentChange(e) {
    dispatch({ type: "SET_INSTRUMENT", payload: e.target.value });
  }

  useEffect(() => {
    console.log(difficulty);
  }, [difficulty]);

  return (
    <div className={`settings ${styles.earTrainerSettings}`}>
      <h1>Settings</h1>
      <h3>Select An Instrument</h3>
      <select
        className={styles.instrumentSelect}
        onChange={handleInstrumentChange}
      >
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
