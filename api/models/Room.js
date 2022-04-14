const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
      required: true,
    },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
  }
  // { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
