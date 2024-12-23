import styles from "./Fretboard.module.css";

function Fretboard() {
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

  const stringNames = ["E", "B", "G", "D", "A", "E"];
  function light(id) {
    document.getElementById(id).classList.add(styles.active);
  }

  function unLight(id) {
    document.getElementById(id).classList.remove(styles.active);
  }
  return (
    <div>
      <h1>Fretboard Simulator</h1>
      <div className={styles.flex}>
        <div className={styles.nut}></div>
        <div className={styles.fretboard}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`outer-string-${i + 1}`} className={`${styles.string}`}>
              {Array.from({ length: 20 }).map((_, j) => (
                <div
                  key={`fret-${j}-string-${i + 1}`}
                  id={`fret-${j}-string-${i + 1}`}
                  className={styles.fret}
                  onMouseEnter={() => light(`fret-${j}-string-${i + 1}`)}
                  onMouseLeave={() => unLight(`fret-${j}-string-${i + 1}`)}
                  data-noteName={notes[j]}
                  data-stringNoteName={stringNames[i]}
                >
                  <div
                    key={`innerFret-${j}-string-${i + 1}`}
                    id={`innerFret-${j}-string-${i + 1}`}
                    style={{ "--fret-number": j, "--string-number": i + 1 }}
                    className={`${styles.innerFret} ${
                      styles[`string${i + 1}`]
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fretboard;
