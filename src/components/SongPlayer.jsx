function SongPlayer({ setSong, song, songList, difficulty, difficultyNumber }) {
  const playRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songList[difficulty].length);
    // const newSong = songs[randomIndex];

    const newSong = songList[difficulty][randomIndex];

    //Updat the song state
    setSong(newSong);
    console.log("New Song", newSong);
    //Play the song
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.load();
    audioPlayer.play();
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
      <button>Get a Tip</button>
      <br />
      <button>Show Song Info</button>
    </div>
  );
}

export default SongPlayer;
