import express from 'express'
import dotenv from 'dotenv';
import connectDb from './database/db.js';
import userRoutes from './routes/userRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// app.get("/",(req,res) => {
//     res.send("Server working");
// });
app.use(express.json());
app.use("/api/user", userRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is running in http://localhost:${PORT}`);
    connectDb();
});