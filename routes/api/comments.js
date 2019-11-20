const express = require("express");
const router = express.Router();
const validateCommentInput = require("../../validation/comment")
const passport = require('passport');

const Comment = require('../../models/Comment')

router.get("/test", (req, res) => res.json({ msg: "This is the comments route" }));

router.get('/', (req, res) => {
  Comment.find()
    .sort({ date: -1 })
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json({ error: err }));
});

router.post('/new', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body)

    if(!isValid) {
      return res.status(400).json(errors);
    }

    const newComment = new Comment({
      user: req.body.user,
      snippet: req.body.snippet,
      body: req.body.body
    })

    newComment.save()
      .then( comment => res.json(comment));

  }
);

module.exports = router;