import styles from "./Fretboard.module.css";

function Fretboard() {
  function light(id) {
    document.getElementById(id).classList.add(styles.active);
  }

  function unLight(id) {
    document.getElementById(id).classList.remove(styles.active);
  }
  return (
    <div>
      <h1>Fretboard Simulator</h1>

      <div className={styles.fretboard}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={`outer-string-${i + 1}`} className={styles.outerString}>
            <div
              key={`string-${i + 1}`}
              id={`string-${i + 1}`}
              className={styles.innerString}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div
                  key={`fret-${j}-string-${i + 1}`}
                  id={`fret-${j}-string-${i + 1}`}
                  className={styles.fret}
                  onMouseEnter={() => light(`fret-${j}-string-${i + 1}`)}
                  onMouseLeave={() => unLight(`fret-${j}-string-${i + 1}`)}
                >
                  <div
                    key={`innerFret-${j}-string-${i + 1}`}
                    id={`innerFret-${j}-string-${i + 1}`}
                    className={styles.innerFret}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fretboard;
