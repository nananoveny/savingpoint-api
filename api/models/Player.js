const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    playerName: {
      type: String,
      required: true,
    },
    pPhone: {
      type: String,
      required: true,
      unique: true,
    },
    point: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", PlayerSchema);
