import AppNav from "../components/AppNav";
import Settings from "../components/Settings";

function EarTrainer() {
  return (
    <div>
      <AppNav />
      <div className="flex">
        <Settings />
        <h1>Ear Trainer</h1>
      </div>
    </div>
  );
}

export default EarTrainer;
