const express = require("express");
const router = express.Router();
const passport = require("passport");

const Fan = require("../../models/Fan");

//get all
router.get("/", (req, res) => {
  Fan.find()
    .then((fans) => res.json(fans))
    .catch((err) => res.status(404).json({ msg: "get all fans failed" }));
});

// //retreives fans for a given idol_Id
// router.get('/:idol_id', (req, res) => {
//   Fan.find({ idol: req.params.idol_id })
//     .then(fans => res.json(fans))
//     .catch(err => res.status(404).json({ error: err }))
// });

// //retreives idols for a given fan_Id
// router.get('/:fan_id', (req, res) => {
//   Fan.find({ fan: req.params.fan_id })
//     .then(idols => res.json(idols))
//     .catch(err => res.status(404).json({ error: err }))
// });

//create new follow relationship
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Fan.findOne({ fan: req.body.fanId, idol: req.body.idolId }).then((doc) => {
      if (doc) {
        return res.status(403).json({ msg: "Can only follow once" });
      }

      const newFan = new Fan({
        fan: req.body.fanId,
        idol: req.body.idolId,
      });

      newFan.save().then(() => {
        Fan.find().then((fans) => res.json(fans));
      });
    });
  }
);

//delete fan
router.delete(
  "/:fan_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log(req.params.fan_id)
    Fan.deleteOne({ _id: req.params.fan_id })
      .then(() => {
        Fan.find().then((fans) => res.json(fans));
      })
      .catch((err) => res.status(404).json({ msg: "error deleting fan" }));
  }
);

module.exports = router;
