import { useEffect, useState } from "react";
import AppNav from "../components/AppNav";
import EarTrainerSettings from "../components/EarTrainerSettings";
import SongPlayer from "../components/SongPlayer";

function EarTrainer() {
  const [song, setSong] = useState("/Assets/Songs/ET_1_Simple_Man.mp3");
  const [instrument, setInstrument] = useState("Guitar");
  const [difficulty, setDifficulty] = useState("Guitar-simple-melody");
  const [difficultyNumber, setDifficultyNumber] = useState(0);
  const [tip, setTip] = useState("");
  const [songInfo, setSongInfo] = useState("");

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const difficulties = {
    GuitarDifficulties: (
      <select onChange={handleDifficultyChange}>
        <option key="Guitar-simple-melody" value="Guitar-simple-melody">
          Simple Melody
        </option>
        <option key="Guitar-complex-melody" value="Guitar-complex-melody">
          Complex Melody
        </option>
        <option key="Guitar-easy-only-key-g" value="Guitar-easy-only-key-g">
          Easy Only Key G
        </option>
        <option key="Guitar-easy" value="Guitar-easy">
          Easy{" "}
        </option>
        <option key="Guitar-easy-with-a-capo" value="Guitar-easy-with-a-capo">
          Easy With a Capo
        </option>
        <option key="Guitar-intermediate" value="Guitar-intermediate">
          Intermediate
        </option>
        <option key="Guitar-full-songs" value="Guitar-full-songs">
          Full Songs
        </option>
        <option key="Guitar-patrick" value="Guitar-patrick">
          Patrick
        </option>
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
          <strong>Easy:</strong> Simple chord progression in easy guitar keys.
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
          <strong>Full Songs: </strong>
          Multi part songs with complex progressions, and extended chords played
          in varying styles and genres.
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
      {
        Path: "/Assets/Songs/ET_MO_A_ElPaso.mp3",
        Title: "El Paso",
        Tip: "test",
        Key: "",
        Chords: "test",
        SongInfo: "test",
      },
      {
        Path: "/Assets/Songs/ET_MO_I_GOTTV1.mp3",
        Title: "GOTTV1",
        Tip: "test",
        Key: "",
        Chords: "test",
        SongInfo: "test",
      },
    ],
    "Guitar-complex-melody": [],
    "Guitar-easy-only-key-g": [
      {
        Path: "/Assets/Songs/ET_Guitar_1415G.mp3",
        Title: "1415G",
        Tip: "Come on dude really?",
        Key: "G",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_Guitar_1465G.mp3",
        Title: "1465G",
        Tip: "Come on dude really?",
        Key: "G",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_Guitar_1524G.mp3",
        Title: "1524G",
        Tip: "Come on dude really?",
        Key: "G",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_Guitar_1645G.mp3",
        Title: "1645G",
        Tip: "Come on dude really?",
        Key: "G",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_Guitar_5411G.mp3",
        Title: "5411G",
        Tip: "Come on dude really?",
        Key: "G",
        Chords: "",
      },
    ],
    "Guitar-easy": [
      {
        Path: "/Assets/Songs/ET_Guitar_Blue_Chorus.mp3",
        Title: "Blue Chorus",
        Tip: "",
        Key: "",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_Guitar_Simple_Man.mp3",
        Title: "Simple Man",
        Tip: "",
        Key: "",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_Guitar_Hurt.mp3",
        Title: "Hurt",
        Tip: "",
        Key: "",
        Chords: "",
      },
    ],
    "Guitar-easy-with-a-capo": [
      {
        Path: "/Assets/Songs/ET_Guitar_Jersey_Giant.mp3",
        Title: "Jersey Giant",
        Tip: "",
        Key: "",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_Guitar_Summertime_Blues_Verse.mp3",
        Title: "Summertime Blues Verse",
        Tip: "",
        Key: "",
        Chords: "",
      },
    ],
    "Guitar-intermediate": [
      {
        Path: "/Assets/Songs/ET_Guitar_Feelin_Good_Again.mp3",
        Title: "Feelin Good Again",
        Tip: "",
        Key: "",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_Guitar_My_Heros_Have_Always_Been_Cowboys.mp3",
        Title: "My Heros Have Always Been Cowboys",
        Tip: "",
        Key: "",
        Chords: "",
      },
    ],
    "Guitar-full-songs": [
      {
        Path: "/Assets/Songs/ET_Guitar_Cavalry.mp3",
        Title: "Cavalry",
        Tip: "",
        Key: "",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_Guitar_Nobody_Knows_You_When_You're_Down_And_Out.mp3",
        Title: "Nobody Knows You When You're Down And Out",
        Tip: "",
        Key: "",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_Guitar_Something.mp3",
        Title: "Something",
        Tip: "",
        Key: "",
        Chords: "",
      },
    ],
    "Guitar-patrick": [
      {
        Path: "/Assets/Songs/Weird/Last_Christmas.m4a",
        Title: "Last Christmas",
        Tip: "",
        Key: "",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/Weird/Mistletoe_ftJazzy_G.m4a",
        Title: "Mistletoe ft. Jazzy G",
        Tip: "",
        Key: "",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/Weird/Rockin_Around_The_Christmas_Tree.m4a",
        Title: "Rockin Around The Christmas Tree",
        Tip: "",
        Key: "",
        Chords: "",
      },
    ],
    "Bass-simple-melody": [
      {
        Path: "/Assets/Songs/ET_BO_A_12BB.mp3",
        Title: "12BB",
        Tip: "",
        Key: "",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_BO_B_G_15.mp3",
        Title: "G 15",
        Tip: "",
        Key: "G",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_BO_B_G_1415.mp3",
        Title: "G 1415",
        Tip: "",
        Key: "G",
        Chords: "",
      },
      {
        Path: "/Assets/Songs/ET_BO_I_A_1415.mp3",
        Title: "A 1415",
        Tip: "",
        Key: "A",
        Chords: "",
      },
    ],
    "Bass-complex-bassline": [],
    "Piano-simple-melody": [],
    "Piano-complex-melody": [],
    "Piano-easy-only-key-c": [],
    "Piano-easy-all-keys": [],
    "Piano-intermediate": [],
    "Piano-full-songs": [],
  };

  useEffect(() => {
    setDifficultyNumber(songList[difficulty]?.length) || 0;
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
            tip={tip}
            setTip={setTip}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default EarTrainer;

{
  /*
  ET_Guitar_Good_Lord_Lorrie_Verse.mp3
  
  */
}
