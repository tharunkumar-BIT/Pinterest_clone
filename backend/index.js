import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import userRoutes from "./routes/userRoutes.js";
import pinRoutes from "./routes/pinRoutes.js";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname safely
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Cloud_Api,
  api_secret: process.env.Cloud_Secret,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/user", userRoutes);
app.use("/api/pin", pinRoutes);

// Static frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

// Start server after DB connects
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
