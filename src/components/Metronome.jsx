import { useEffect, useRef, useState } from "react";
import styles from "./Metronome.module.css";

function Metronome({ numOfBeats, lengthOfBeat, noteType }) {
  const rudiments = [
    {
      RudimentNumber: "Zero",
      Rudiment: " 0:",
    },
    {
      RudimentNumber: "One",
      Rudiment: " 1: R L R L    R L R L      R L R L    R L R L",
    },
    {
      RudimentNumber: "Two",
      Rudiment: " 2: L R L R    L R L R      L R L R    L R L R",
    },
    {
      RudimentNumber: "Three",
      Rudiment: " 3: R R L L    R R L L      R R L L    R R L L",
    },
    {
      RudimentNumber: "Four",
      Rudiment: " 4: L L R R    L L R R      L L R R    L L R R",
    },
    {
      RudimentNumber: "Five",
      Rudiment: " 5: R L R R    L R L L      R L R R    L R L L",
    },
    {
      RudimentNumber: "Six",
      Rudiment: " 6: R L L R    L R R L      R L L R    L R R L",
    },
    {
      RudimentNumber: "Seven",
      Rudiment: " 7: R R L R    L L R L      R R L R    L L R L",
    },
    {
      RudimentNumber: "Eight",
      Rudiment: " 8: R L R L    L R L R      R L R L    L R L R",
    },
    {
      RudimentNumber: "Nine",
      Rudiment: " 9: R R R L    R R R L      R R R L    R R R L",
    },
    {
      RudimentNumber: "Ten",
      Rudiment: "10: L L L R    L L L R      L L L R    L L L R",
    },
    {
      RudimentNumber: "Eleven",
      Rudiment: "11: R L L L    R L L L      R L L L    R L L L",
    },
    {
      RudimentNumber: "Twelve",
      Rudiment: "12: L R R R    L R R R      L R R R    L R R R",
    },
    {
      RudimentNumber: "Thirteen",
      Rudiment: "13: R R R R    L L L L      R R R R    L L L L",
    },
    {
      RudimentNumber: "Fourteen",
      Rudiment: "14: R L R L    R R L L      R L R L    R R L L",
    },
    {
      RudimentNumber: "Fifteen",
      Rudiment: "15: L R L R    L L R R      L R L R    L L R R",
    },
    {
      RudimentNumber: "Sixteen",
      Rudiment: "16: R L R L    R L R R      L R L R    L R L L",
    },
    {
      RudimentNumber: "Seventeen",
      Rudiment: "17: R L R L    R L L R      L R L R    L R R L",
    },
    {
      RudimentNumber: "Eighteen",
      Rudiment: "18: R L R L    R R L R      L R L R    L L R L",
    },
    {
      RudimentNumber: "Nineteen",
      Rudiment: "19: R L R L    R R R L      R L R L    R R R L",
    },
    {
      RudimentNumber: "Twenty",
      Rudiment: "20: L R L R    L L L R      L R L R    L L L R",
    },
    {
      RudimentNumber: "TwentyOne",
      Rudiment: "21: R L R L    R L L L      R L R L    R L L L",
    },
    {
      RudimentNumber: "TwentyTwo",
      Rudiment: "22: L R L R    L R R R      L R L R    L R R R",
    },
    {
      RudimentNumber: "TwentyThree",
      Rudiment: "23: R L R L    R R R R      L R L R    L L L L",
    },
    {
      RudimentNumber: "TwentyFour",
      Rudiment: "24: R R L L    R L R R      L L R R    L R L L",
    },
  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentRudimentIndex, setCurrentRudimentIndex] = useState(0);

  const intervalRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const audioContext = useRef(null);
  const currBeatRef = useRef(0);
  const measureNumberDiv = useRef(0);
  const currMeasureRef = useRef(0);

  function toggleWorkout() {
    if (isPlaying) {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
      toggleButtonRef.current.textContent = "Start Workout";
      currBeatRef.current = 0;
    } else {
      if (!audioContext.current) {
        audioContext.current = new (window.AudioContext ||
          window.webkitAudioContext)();
      }
      if (audioContext.current.state === "suspended") {
        audioContext.current.resume();
      }

      currBeatRef.current = 0;

      intervalRef.current = setInterval(() => {
        playClick();

        if (currBeatRef.current % noteType === 0) {
          currMeasureRef.current = currMeasureRef.current + 1;
          console.log("current measure", currMeasureRef);
          measureNumberDiv.current.innerHTML = currMeasureRef.current;
        }

        currBeatRef.current = (currBeatRef.current + 1) % numOfBeats;

        if (currBeatRef.current === 1) {
          setCurrentRudimentIndex(
            (prevIndex) => (prevIndex + 1) % rudiments.length
          );
        }
        if (currBeatRef.current === 0) {
          currMeasureRef.current = 0;
        }
      }, lengthOfBeat * 1000);

      setIsPlaying(true);
      toggleButtonRef.current.textContent = "Stop Workout";
    }
  }

  function playClick() {
    const currentBeat = currBeatRef.current;
    console.log("PlayClick - Current beat:", currentBeat);

    const oscillator = audioContext.current.createOscillator();
    const gainNode = audioContext.current.createGain();

    oscillator.type = currBeatRef.current % noteType == 0 ? "square" : "sine";
    oscillator.frequency.setValueAtTime(1000, audioContext.current.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.current.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.current.destination);

    oscillator.start();
    oscillator.stop(audioContext.current.currentTime + 0.1);
  }

  useEffect(() => {
    return () => {
      if (audioContext.current) {
        audioContext.current.close();
      }
    };
  }, []);

  return (
    <div className={styles.metronome}>
      <h1>Stick Control Workout</h1>
      <img src="../Assets/StickControlImages/staff.png" width="300px" />
      <p id="imgDiv">{rudiments[currentRudimentIndex].Rudiment}</p>
      <p>
        <strong>Measure: </strong>
        <span ref={measureNumberDiv}></span>
      </p>
      <button
        className={styles.workoutToggle}
        onClick={toggleWorkout}
        ref={toggleButtonRef}
      >
        Start Workout
      </button>
    </div>
  );
}

export default Metronome;
