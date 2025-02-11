import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/User.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.post("/api/auth/login", async (req, res) => {
  try {
    console.log("\n--- New User Data ---");
    console.log("Database: music");
    console.log("Collection: users");
    console.log("Attempting to save:", req.body);

    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
      password,
      settings: {
        fretboardSettings: {
          currentKey: "empty",
          currentScale: "note",
          displayingAllNotes: false,
        },
        metronomeSettings: {
          bpm: 60,
          noteType: "quarter",
          numOfMeasures: 4,
        },
        earTrainerSettings: {
          instrument: "Guitar",
          difficulty: "simple",
        },
      },
    });

    const savedUser = await newUser.save();
    console.log("✅ Successfully saved to database");
    console.log("Document ID:", savedUser._id);
    console.log("-------------------\n");
    res.status(200).json({ message: "User saved", success: true });
  } catch (error) {
    console.log("❌ Failed to save to database");
    console.error("Error details:", error);
    console.log("-------------------\n");
    res.status(500).json({ message: error.message, success: false });
  }
});

mongoose
  .connect(
    "mongodb+srv://calvingaiennie:337-Cosmoga12@cluster0.avhja.mongodb.net/music?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas database: music");
    app.listen(5001, () => console.log("Server running on port 5001"));
  })
  .catch((err) => {
    console.error("MongoDB Atlas connection error:", err);
    process.exit(1);
  });
