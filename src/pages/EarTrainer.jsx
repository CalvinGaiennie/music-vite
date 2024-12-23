import { useEffect, useState } from "react";
import AppNav from "../components/AppNav";
import EarTrainerSettings from "../components/EarTrainerSettings";
import SongPlayer from "../components/SongPlayer";

function EarTrainer() {
  const [song, setSong] = useState("/Assets/Songs/ET_1_Simple_Man.mp3");
  const [instrument, setInstrument] = useState("Guitar");
  const [difficulty, setDifficulty] = useState("Guitar-simple-melody");
  const [difficultyNumber, setDifficultyNumber] = useState(0);
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const difficulties = {
    GuitarDifficulties: (
      <select onChange={handleDifficultyChange}>
        <option value="Guitar-simple-melody">Simple Melody</option>
        <option value="Guitar-complex-melody">Complex Melody</option>
        <option value="Guitar-easy-only-key-g">Easy Only Key G</option>
        <option value="Guitar-easy-with-a-capo">Easy With a Capo</option>
        <option value="Guitar-intermediate">Intermediate</option>
        <option value="Guitar-full-songs">Full Songs</option>
        <option value="Guitar-patrick">Patrick</option>
      </select>
    ),
    GuitarGuide: (
      <div>
        <p>
          <strong>Simple Melody:</strong>
        </p>
        <p>
          <strong>Complex Melody:</strong>
        </p>
        <p>
          <strong>Easy Only Key G:</strong> Simple chord progression in the key
          of G.
        </p>
        <p>
          <strong>Easy With a Capo:</strong> Simple chord progression using the
          chords shapes of the key of G but with a capo. So could actually be in
          any key.
        </p>
        <p>
          <strong>Intermediate:</strong> Any key, any shapes.
        </p>
        <p>
          <strong>Full Songs:</strong>
        </p>
        <p>
          <strong>Patrick:</strong>
        </p>
      </div>
    ),
    BassDifficulties: (
      <select onChange={handleDifficultyChange}>
        <option value="Bass-simple-bassline">Simple Bassline</option>
        <option value="Bass-complex-bassline">Complex Bassline</option>
      </select>
    ),
    BassGuide: (
      <div>
        <p>
          <strong>Simple Bassline:</strong>
        </p>
        <p>
          <strong>Complex Bassline:</strong>
        </p>
      </div>
    ),
    PianoDifficulties: (
      <select onChange={handleDifficultyChange}>
        <option value="Piano-simple-melody">Simple Melody</option>
        <option value="Piano-complex-melody">Complex Melody</option>
        <option value="Piano-easy-only-key-c">Easy Only Key C</option>
        <option value="Piano-easy-all-keys">Easy All Keys</option>
        <option value="Piano-intermediate">Intermediate</option>
        <option value="Piano-full-songs">Full Songs</option>
      </select>
    ),
    PianoGuide: (
      <div>
        <p>
          <strong>Simple Melody:</strong>
        </p>
        <p>
          <strong>Complex Melody:</strong>
        </p>
        <p>
          <strong>Easy Only Key C: </strong> Simple diatonic progressions in the
          key of C.
        </p>
        <p>
          <strong>Easy All Keys: </strong>
          Simple diatonic progressions in all keys.
        </p>
        <p>
          <strong>Intermediate:</strong>
        </p>
        <p>
          <strong>Full Songs:</strong>
        </p>
      </div>
    ),
    GuitarAndBassDifficulties: (
      <select onChange={handleDifficultyChange}>
        <option value="GuitarAndBass-simple-progressions">
          Simple Progressions
        </option>
        <option value="GuitarAndBass-complex-progressions">
          Complex Progressions
        </option>
      </select>
    ),
    GuitarAndBassGuide: (
      <div>
        <p>
          <strong>Simple Progressions:</strong>
        </p>
        <p>
          <strong>Complex Progressions:</strong>
        </p>
      </div>
    ),
    GuitarBassAndDrumsDifficulties: (
      <select onChange={handleDifficultyChange}>
        <option value="GuitarBassAndDrums-simple-progressions">
          Simple Progressions
        </option>
        <option value="GuitarBassAndDrums-complex-progressions">
          Complex Progressions
        </option>
      </select>
    ),
    GuitarBassAndDrumsGuide: (
      <div>
        <p>
          <strong>Simple Progressions:</strong>
        </p>
        <p>
          <strong>Complex Progressions:</strong>
        </p>
      </div>
    ),
    PianoBassAndDrumsDifficulties: (
      <select onChange={handleDifficultyChange}>
        <option value="PianoBassAndDrums-simple-progressions">
          Simple Progressions
        </option>
        <option value="PianoBassAndDrums-complex-progressions">
          Complex Progressions
        </option>
      </select>
    ),
    PianoBassAndDrumsGuide: (
      <div>
        <p>
          <strong>Simple Progressions:</strong>
        </p>
        <p>
          <strong>Complex Progressions:</strong>
        </p>
      </div>
    ),
    GuitarPianoBassAndDrumsDifficulties: (
      <select onChange={handleDifficultyChange}>
        <option value="GuitarPianoBassAndDrums-simple-progressions">
          Simple Progressions
        </option>
        <option value="GuitarPianoBassAndDrums-complex-progressions">
          Complex Progressions
        </option>
      </select>
    ),
    GuitarPianoBassAndDrumsGuide: (
      <div>
        <p>
          <strong>Simple Progressions:</strong>
        </p>
        <p>
          <strong>Complex Progressions:</strong>
        </p>
      </div>
    ),
  };

  const songList = {
    "Guitar-simple-melody": [
      "/Assets/Songs/ET_MO_A_ElPaso.mp3",
      "/Assets/Songs/ET_MO_I_GOTTV1.mp3",
    ],
    "Guitar-full-songs": [
      "/Assets/Songs/ET_Guitar_Cavalry.mp3",
      "/Assets/Songs/ET_Guitar_Nobody_Knows_You_When_You're_Down_And_Out.mp3",
      "/Assets/Songs/ET_Guitar_Something.mp3",
    ],
    "Bass-simple-melody": [
      "/Assets/Songs/ET_BO_A_12BB.mp3",
      "/Assets/Songs/ET_BO_B_G_15.mp3",
      "/Assets/Songs/ET_BO_B_G_1415.mp3",
      "/Assets/Songs/ET_BO_I_A_1415.mp3",
    ],
  };

  useEffect(() => {
    setDifficultyNumber(songList[difficulty].length);
  }, [difficulty]);

  return (
    <div>
      <AppNav />
      <div className="flex">
        <EarTrainerSettings
          instrument={instrument}
          setInstrument={setInstrument}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          difficulties={difficulties}
        />
        <div>
          <h1>Ear Trainer</h1>
          <SongPlayer
            song={song}
            setSong={setSong}
            songList={songList}
            difficulty={difficulty}
            difficultyNumber={difficultyNumber}
          />
        </div>
      </div>
    </div>
  );
}

export default EarTrainer;
