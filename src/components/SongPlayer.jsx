import { useRef } from "react";

function SongPlayer({
  setSong,
  song,
  songList,
  difficulty,
  difficultyNumber,
  tip,
  setTip,
  songInfo,
  setSongInfo,
}) {
  const tipP = useRef(null);
  const songInfoP = useRef(null);
  const playRandomSong = () => {
    if (!songList[difficulty] || songList[difficulty].length === 0) {
      console.log("No songs available for this difficulty level");
      return;
    }

    const randomIndex = Math.floor(Math.random() * songList[difficulty].length);
    // const newSong = songs[randomIndex];

    const newSong = songList[difficulty][randomIndex].Path;
    const newTip = songList[difficulty][randomIndex].Tip;
    const newSongInfo = songList[difficulty][randomIndex].songInfo;
    tipP.current.innerHTML = "";
    songInfoP.current.innerHTML = "";

    //Update the song state
    setSong(newSong);
    setTip(newTip);
    setSongInfo(newSongInfo);
    console.log("New Song", newSong);
    //Play the song
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.load();

    setTimeout(() => {
      audioPlayer.play();
    }, 200);
  };

  const getTip = () => {
    tipP.current.innerHTML = tip;
  };

  const getSongInfo = () => {
    songInfoP.current.innerHTML = songInfo;
  };

  return (
    <div>
      <h2>Song Player</h2>
      <audio src={song} id="audioPlayer" controls>
        Your browser does not support the audio tag.
      </audio>
      <br />
      <button onClick={playRandomSong}>Play Random Song</button>
      <p>Number of Songs in this Bank: {difficultyNumber}</p>
      <br />
      <button onClick={getTip}>Get a Tip</button>
      <p ref={tipP}></p>
      <br />
      <button onClick={getSongInfo}>Show Song Info</button>
      <p ref={songInfoP}></p>
    </div>
  );
}

export default SongPlayer;
