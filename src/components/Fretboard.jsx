import styles from "./Fretboard.module.css";

function Fretboard() {
  return (
    <div>
      <h1>Fretboard Simulator</h1>
      <div className={styles.fretboard}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`string-${i + 1}`}
            id={`string-${i + 1}`}
            className={styles.string}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div
                key={`fret-${j}-string-${i + 1}`}
                id={`fret-${j}-string-${i + 1}`}
                className={styles.fret}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fretboard;
