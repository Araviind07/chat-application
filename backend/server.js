import { configDotenv } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import connectTomongoDB from "./db/connectMBD.js";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

const app = express();
configDotenv();

const PORT = process.env.PORT || 5000; 

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT, ()=> {
  connectTomongoDB();
  console.log(`Server running on port ${PORT}`)
});
