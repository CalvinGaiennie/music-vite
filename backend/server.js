import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

// CORS configuration with more permissive settings for development
app.use(
  cors({
    origin: true, // Allow all origins in development
    credentials: true,
  })
);

app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.json({ message: "Server is running" });
});

app.use("/api/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;

const server = app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("CORS enabled for all origins");
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${PORT} is busy, trying ${PORT + 1}`);
      app.listen(PORT + 1);
    } else {
      console.error(err);
    }
  });

// Connect to MongoDB
connectDB().catch(console.error);
