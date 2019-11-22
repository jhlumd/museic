const express = require("express");
const router = express.Router();
const validateCommentInput = require("../../validation/comment")
const passport = require('passport');

const Comment = require('../../models/Comment')

router.get("/test", (req, res) => res.json({ msg: "This is the comments route" }));

//get all
router.get('/', (req, res) => {
  Comment.find()
    .sort({ date: -1 })
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json({ error: err }));
  }
);

//this is for testing purposes, using users instead of snippets to check comments
router.get('/:user_id', (req, res) => {
  Comment.find({ user : req.params.user_id }) //returns array?
    .then(comments => res.json(comments))
    .catch(err => res.status(404).json({ error: "no comments found for user" }))
})

//get all comments for snippet THIS NEEDS TO BE RE-TESTED BECAUSE NO SNIPPET ID YET
router.get('/:snippet_id', (req, res) => {
  Comment.find({ snippet: req.params.snippet_id})
    .then(comments => res.json(comments))
    .catch(err => res.status(404).json({ error: err }))
})

//create new
router.post('/new', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body)

    if(!isValid) {
      return res.status(400).json(errors);
    }
    
    const newComment = new Comment({
      user: req.body.userId,
      snippet: req.body.snippet,
      body: req.body.body
    })

    newComment.save()
      .then( comment => res.json(comment));

  }
);

//update comment
router.patch('/update',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body)

    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    const commentId = req.body.commentId

   Comment.findOne({_id: commentId})
    .then( comment => {
     comment.body = req.body.body;
     comment.save().then(comment => res.json(comment))
    })
  }
);

//delete
router.delete('/:comment_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const commentId = req.params.comment_id;
    Comment.deleteOne({_id: commentId})
      .then( () => res.json({ msg: `comment id: ${commentId} deleted`}))
      .catch(err => console.log(err));

  }
);

module.exports = router;