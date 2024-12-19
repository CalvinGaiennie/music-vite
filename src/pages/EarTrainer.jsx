import AppNav from "../components/AppNav";
import EarTrainerSettings from "../components/EarTrainerSettings";

function EarTrainer() {
  return (
    <div>
      <AppNav />
      <div className="flex">
        <EarTrainerSettings />
        <h1>Ear Trainer</h1>
      </div>
    </div>
  );
}

export default EarTrainer;
