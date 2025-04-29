import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import userRoutes from "./routes/userRoutes.js";
import pinRoutes from "./routes/pinRoutes.js";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Cloud_Api,
  api_secret: process.env.Cloud_Secret,
});

const app = express();
const PORT = process.env.PORT;

// app.get("/",(req,res) => {
//     res.send("Server working");
// });
app.use(express.json());
app.use(cookieParser());

//using routes
app.use("/api/user", userRoutes);
app.use("/api/pin", pinRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
  connectDb();
});
