function SongPlayer() {
  const song = "/Assets/Songs/ET_1_Simple_Man.mp3";

  return (
    <div>
      <h2>Song Player</h2>
      <audio src={song} id="audioPlayer" controls>
        Your browser does not support the audio tag.
      </audio>
      <br />
      <button>Play Random Song</button>
      <br />
      <button>Get a Tip</button>
      <br />
      <button>Show Song Info</button>
    </div>
  );
}

export default SongPlayer;
