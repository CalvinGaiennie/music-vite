import AppNav from "../components/AppNav";
import MetronomeSettings from "../components/MetronomeSettings";
import Metronome from "../components/Metronome";
import { useEffect, useReducer } from "react";
import PageTemplate from "../components/PageTemplate";

const initialState = {
  BPM: "90",
  noteType: "8",
  numOfMeasures: "2",
  numOfBeats: "",
  lengthOfBeat: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_BPM":
      return { ...state, BPM: action.payload };
    case "SET_NOTE_TYPE":
      return { ...state, noteType: action.payload };
    case "SET_NUM_OF_MEASURES":
      return { ...state, numOfMeasures: action.payload };
    case "SET_NUM_OF_BEATS":
      return { ...state, numOfBeats: action.payload };
    case "SET_LENGTH_OF_BEAT":
      return { ...state, lengthOfBeat: action.payload };
    default:
      return state;
  }
}

function StickControl() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function countTotalClicks() {
    const currNumOfBeats = Number(state.numOfMeasures) * Number(state.noteType);
    dispatch({ type: "SET_NUM_OF_BEATS", payload: currNumOfBeats });
  }

  useEffect(() => {
    countTotalClicks();
  }, [state.noteType, state.numOfMeasures, state.BPM]);

  useEffect(() => {
    const currLengthOfBeat = (60 / state.BPM / state.noteType) * 4;
    dispatch({ type: "SET_LENGTH_OF_BEAT", payload: currLengthOfBeat });
  }, [state.BPM, state.noteType]);

  return (
    <PageTemplate
      nav={<AppNav />}
      settings={<MetronomeSettings dispatch={dispatch} />}
      mainElement={
        <Metronome
          numOfBeats={state.numOfBeats}
          lengthOfBeat={state.lengthOfBeat}
          noteType={state.noteType}
        />
      }
    />
  );
}

export default StickControl;

{
  /* <PageTemplate nav={} settings={} mainPage={}/> */
}
