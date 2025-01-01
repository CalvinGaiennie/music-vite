import styles from "./Fretboard.module.css";
function FretboardSettings({ dispatch, displayingAllNotes }) {
  const notes = [
    { display: "A", value: "A" },
    { display: "A#/Bb", value: "A#" },
    { display: "B", value: "B" },
    { display: "C", value: "C" },
    { display: "C#/Db", value: "C#" },
    { display: "D", value: "D" },
    { display: "D#/Eb", value: "D#" },
    { display: "E", value: "E" },
    { display: "F", value: "F" },
    { display: "F#/Gb", value: "F#" },
    { display: "G", value: "G" },
    { display: "G#/Ab", value: "G#" },
  ];
  function displayAllNotes() {
    if (displayingAllNotes == false) {
      const allFrets = document.querySelectorAll(`.${styles.fret}`);
      allFrets.forEach((fret) => {
        fret.classList.add(styles.active);
      });
    } else {
      const allFrets = document.querySelectorAll(`.${styles.fret}`);
      allFrets.forEach((fret) => {
        fret.classList.remove(styles.active);
      });
    }
  }

  return (
    <div className={`settings ${styles.fretboardSettings}`}>
      <h1>Settings</h1>
      <h3>Display All Notes</h3>
      <button onClick={() => displayAllNotes()}>
        {displayingAllNotes ? "Hide All Notes" : "Display All Notes"}
      </button>
      <h3>Select a Key</h3>
      <select
        onChange={(e) =>
          dispatch({ type: "SET_CURRENT_KEY", payload: e.target.value })
        }
      >
        <option key={"empty"} value={"empty"}>
          Empty
        </option>
        {notes.map((note) => (
          <option key={note.display} value={note.value}>
            {note.display}
          </option>
        ))}
      </select>
      <h3>Select a Scale</h3>
      <select
        onChange={(e) =>
          dispatch({ type: "SET_CURRENT_SCALE", payload: e.target.value })
        }
      >
        <option value="note">Root</option>
        <option value="major">Major</option>
        <option value="minor">Minor</option>
        <option value="majorPentatonic">Major Pentatonic</option>
        <option value="minorPentatonic">Minor Pentatonic</option>
        <option value="majorArpeggio">Major Arpeggio</option>
        <option value="minorArpeggio">Minor Arpeggio</option>
      </select>
      <h3>Select Pattern</h3>
      <select>
        <option value="full-scale">Full Scale</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default FretboardSettings;
