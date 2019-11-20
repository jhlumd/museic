const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the snippets route" }));

router.post("/create"), (req, res) => res.json({ msg: `attemped to create ${req.json}`})

module.exports = router;
