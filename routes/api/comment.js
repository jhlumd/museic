const express = require("express");
const router = express.Router();
const validateCommentInput = require("../../validation/comment")

router.get("/test", (req, res) => res.json({ msg: "This is the comments route" }));

router.post('/comment', (req, res) => {
  const { errors, isValid } = validateCommentInput(req.body)

  if(!isValid) {
    return res.status(400).json(errors);
  }

  
})

module.exports = router;