import { useReducer } from "react";
import AppNav from "../components/AppNav";
import Fretboard from "../components/Fretboard";
import FretboardSettings from "../components/FretboardSettings";
import PageTemplate from "../components/PageTemplate";

const initialState = {
  currentKey: "empty",
  currentScale: "note",
  displayingAllNotes: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CURRENT_KEY":
      return { ...state, currentKey: action.payload };
    case "SET_CURRENT_SCALE":
      return { ...state, currentScale: action.payload };
    case "SET_DISPLAYING_ALL_NOTES":
      return { ...state, displayingAllNotes: action.payload };
    default:
      return state;
  }
}

function FretboardSimulator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <PageTemplate
        nav={<AppNav />}
        settings={
          <FretboardSettings
            dispatch={dispatch}
            displayingAllNotes={state.displayingAllNotes}
          />
        }
        mainElement={
          <Fretboard
            currentScale={state.currentScale}
            currentKey={state.currentKey}
          />
        }
      />
      <div>
        <p>{state.currentKey}</p>
      </div>
    </div>
  );
}

export default FretboardSimulator;
