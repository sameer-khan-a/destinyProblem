import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import destinationRoutes from "./routes/destinyRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/", destinationRoutes);

// Code for connecting to MongoDB

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});