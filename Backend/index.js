import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import eventRouter from "./routes/event.routes.js";
import path from "path";

dotenv.config();
const app = express();

const _dirname = path.resolve();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/events", eventRouter);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });


const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (_,res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));