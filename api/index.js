const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const playerRouter = require("./routes/player");
const roomRouter = require("./routes/room");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection success"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use("/api/player", playerRouter);
app.use("/api/room", roomRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`BE server is running ${process.env.PORT}`);
});
