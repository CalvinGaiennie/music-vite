import AppNav from "../components/AppNav";
import MetronomeSettings from "../components/MetronomeSettings";
import Metronome from "../components/Metronome";
import { useEffect, useState } from "react";

function StickControl() {
  const [BPM, setBPM] = useState("40");
  const [noteType, setNoteType] = useState("4");
  const [numOfMeasures, setNumOfMeasures] = useState("2");
  const [numOfBeats, setNumOfBeats] = useState("");
  const [lengthOfBeat, setLengthOfBeat] = useState("");
  const [currMeasureNumber, setCurrentMeasureNumber] = useState("");

  function countTotalClicks() {
    const currNumOfBeats = Number(numOfMeasures) * Number(noteType);

    setNumOfBeats(currNumOfBeats);
  }

  useEffect(() => {
    countTotalClicks();
  }, [noteType, numOfMeasures, BPM]);

  useEffect(() => {
    const currLengthOfBeat = (60 / BPM / noteType) * 4;
    setLengthOfBeat(currLengthOfBeat);
  }, [BPM, noteType]);

  return (
    <div>
      <AppNav />
      <div className="flex">
        <MetronomeSettings
          setBPM={setBPM}
          setNoteType={setNoteType}
          setNumOfMeasures={setNumOfMeasures}
        />
        <Metronome numOfBeats={numOfBeats} lengthOfBeat={lengthOfBeat} />
      </div>
    </div>
  );
}

export default StickControl;