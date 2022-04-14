const router = require("express").Router();
const Player = require("../models/Player");

//register
router.post("/", async (req, res) => {
  const newPlayer = new Player(req.body);

  try {
    const savePlayer = await newPlayer.save();
    res.status(200).json(savePlayer);
  } catch (error) {
    res.status(500).json(error);
  }
});

//getplayers

router.get("/", async (req, res) => {
  try {
    const players = await Player.find().sort({ point: -1 });
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json(error);
  }
});

//getplayername by pPHoneUser
router.get("/loadPlayer/:pPhone", async (req, res) => {
  try {
    const loadPlayer = await Player.findOne(req.params).select("playerName");
    res.status(200).json(loadPlayer);
  } catch (error) {
    res.status(500).json(error);
  }
});

//getplayerbyid is

router.get("/:id", async (req, res) => {
  try {
    const getPlayer = await Player.findById(req.params.id);
    res.status(200).json(getPlayer);
  } catch (error) {
    res.status(500).json(error);
  }
});

// updatePoint
router.put("/:id", async (req, res) => {
  try {
    const updatePointPlayer = await Player.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatePointPlayer);
  } catch (error) {
    res.status(500).json(error);
  }
});
//getranking

// router.get("/ranking", async (req, res) => {
//   try {
//     const ranking = await Player.find();
//     res.status(200).json(ranking);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
module.exports = router;
