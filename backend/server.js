import express from "express";
import { config } from "dotenv";
import cors from "cors";
import authController from "./controllers/authcontroller.js"
import feedsController from "./controllers/feedsController.js"

config();
const app = express();
app.use(express.json())
app.use(cors())

const port = process.env.PORT;

//Constrollers
app.use("/auth", authController)
app.use("/feeds", feedsController)
// app.use("/stories")
// app.use("/profile")

app.get("/", (req, res) => {
    res.send("Backend is working.")
})

app.listen(port, () => {
    console.log("Server is running: ", port)
})