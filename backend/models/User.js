import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    settings: {
      fretboardSettings: {
        currentKey: String,
        currentScale: String,
        displayingAllNotes: Boolean,
      },
      metronomeSettings: {
        bpm: Number,
        noteType: String,
        numOfMeasures: Number,
      },
      earTrainerSettings: {
        instrument: String,
        difficulty: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
