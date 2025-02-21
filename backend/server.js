import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/User.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://cgmusicv2.netlify.app",
    ],
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
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas database: music");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB Atlas connection error:", err);
    process.exit(1);
  });
