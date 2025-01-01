import { useEffect, useState } from "react";
import styles from "./Fretboard.module.css";

function Fretboard({ currentKey, currentScale }) {
  const [isScaleActive, setIsScaleActive] = useState(false);

  const scales = {
    note: [0], // Just the root note
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    majorPentatonic: [0, 2, 4, 7, 9],
    minorPentatonic: [0, 3, 5, 7, 10],
    majorArpeggio: [0, 4, 7],
    minorArpeggio: [0, 3, 7],
  };
  const notes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];

  const stringNames = ["E", "B", "G", "D", "A", "E"];

  function light(id) {
    if (isScaleActive === false) {
      document.getElementById(id).classList.add(styles.active);
    }
  }

  function unLight(id) {
    if (isScaleActive === false) {
      document.getElementById(id).classList.remove(styles.active);
    }
  }

  function getNoteAtFret(stringNote, fretNumber) {
    const startIndex = notes.findIndex((note) => note === stringNote);
    return notes[(startIndex + fretNumber) % 12];
  }

  function buildScale(startNote, scaleName) {
    const newScale = [];
    const startIndex = notes.findIndex((note) => note === startNote);

    for (let i = 0; i < scales[scaleName].length; i++) {
      const currentIndex = (scales[scaleName][i] + startIndex) % 12;
      const currentNote = notes[currentIndex];
      newScale.push(currentNote);
    }
    console.log("New Scale!!!:", newScale);
    return newScale;
  }

  function clearAllActiveNotes() {
    const allFrets = document.querySelectorAll(`.${styles.fret}`);
    allFrets.forEach((fret) => {
      fret.classList.remove(styles.active);
    });
    setIsScaleActive(false);
  }

  function highlightScaleNotes(scaleNotes) {
    const allFrets = document.querySelectorAll(`.${styles.fret}`);
    allFrets.forEach((fret) => {
      const noteName = fret.getAttribute("data-noteName");
      if (scaleNotes.includes(noteName)) {
        fret.classList.add(styles.active);
      }
    });
    setIsScaleActive(true);
  }

  useEffect(() => {
    clearAllActiveNotes();
    if (currentKey !== "empty") {
      const scaleNotes = buildScale(currentKey, currentScale);
      highlightScaleNotes(scaleNotes);
    }
  }, [currentKey, currentScale, buildScale]);

  return (
    <div className="main-page">
      <h1>Fretboard Simulator</h1>
      <div className={(styles.flex, styles.fretboard)}>
        <div>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`outer-string-${i + 1}`} className={`${styles.string}`}>
              {Array.from({ length: 23 }).map((_, j) => (
                <div
                  key={`fret-${j}-string-${i + 1}`}
                  id={`fret-${j}-string-${i + 1}`}
                  className={`${styles.fret} ${getNoteAtFret(
                    stringNames[i],
                    j
                  )} ${j == 0 ? styles.fretnut : ""}`}
                  onMouseEnter={() => light(`fret-${j}-string-${i + 1}`)}
                  onMouseLeave={() => unLight(`fret-${j}-string-${i + 1}`)}
                  // data-noteName={notes[j]}
                  data-noteName={getNoteAtFret(stringNames[i], j)}
                  data-stringNoteName={stringNames[i]}
                >
                  {j != 0 ? (
                    <div
                      key={`innerFret-${j}-string-${i + 1}`}
                      id={`innerFret-${j}-string-${i + 1}`}
                      style={{ "--fret-number": j, "--string-number": i + 1 }}
                      className={`${styles.innerFret} ${
                        styles[`string${i + 1}`]
                      }`}
                    ></div>
                  ) : (
                    ""
                  )}
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
