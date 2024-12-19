import AppNav from "../components/AppNav";
import EarTrainerSettings from "../components/EarTrainerSettings";
import SongPlayer from "../components/SongPlayer";

function EarTrainer() {
  return (
    <div>
      <AppNav />
      <div className="flex">
        <EarTrainerSettings />
        <div>
          <h1>Ear Trainer</h1>
          <SongPlayer />
        </div>
      </div>
    </div>
  );
}

export default EarTrainer;
