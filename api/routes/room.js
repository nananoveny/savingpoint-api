const router = require("express").Router();
const Room = require("../models/Room");
//createroom
router.post("/", async (req, res) => {
  const newRoom = new Room(req.body);

  try {
    const saveRoom = await newRoom.save();
    res.status(200).json(saveRoom);
  } catch (error) {
    res.status(500).json(error);
  }
});

//getplayerbyroomid

router.get("/:id", async (req, res) => {
  try {
    const playerRoomId = await Room.findById(req.params.id).populate("players");
    res.status(200).json(playerRoomId);
  } catch (error) {
    res.status(500).json(error);
  }
});

//getallroomandplayer

router.get("/", async (req, res) => {
  try {
    const allRooms = await Room.find().populate("players");
    res.status(200).json(allRooms);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
