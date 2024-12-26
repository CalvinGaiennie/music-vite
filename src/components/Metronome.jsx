import { useEffect, useRef, useState } from "react";
import styles from "./Metronome.module.css";

function Metronome({ numOfBeats, lengthOfBeat }) {
  const rudiments = [
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
  const intervalRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const audioContext = useRef(null);
  const currBeatRef = useRef(0);
  const [currentRudimentIndex, setCurrentRudimentIndex] = useState(0);

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
      console.log("Starting workout, beat reset to:", currBeatRef.current);

      intervalRef.current = setInterval(() => {
        playClick();
        currBeatRef.current = (currBeatRef.current + 1) % numOfBeats;
        console.log("After increment - beat:", currBeatRef.current);

        if (currBeatRef.current === 0) {
          setCurrentRudimentIndex(
            (prevIndex) => (prevIndex + 1) % rudiments.length
          );
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

    oscillator.type = currBeatRef.current === 0 ? "square" : "sine";
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
      <p>{rudiments[currentRudimentIndex].Rudiment}</p>
      <div id="imgDiv"></div>
      <div id="measureNumberDiv"></div>

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
