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

{
  /*
  ET_Guitar_1415G.mp3
  ET_Guitar_1465G.mp3
  ET_Guitar_1524G.mp3
  ET_Guitar_1645G.mp3
  ET_Guitar_5411G.mp3
  ET_Guitar_Blue_Chorus.mp3
  
  ET_Guitar_Feelin_Good_Again.mp3
  ET_Guitar_Good_Lord_Lorrie_Verse.mp3
  ET_Guitar_Hurt.mp3
  ET_Guitar_Jersey_Giant.mp3
  ET_Guitar_My_Heros_Have_Always_Been_Cowboys.mp3
  
  ET_Guitar_Simple_Man.mp3
  
  ET_Guitar_Summertime_Blues_Verse.mp3
  */
}
