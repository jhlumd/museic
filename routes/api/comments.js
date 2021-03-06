const express = require("express");
const router = express.Router();
const validateCommentInput = require("../../validation/comment");
const passport = require("passport");

const Comment = require("../../models/Comment");

//get all
router.get("/", (req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(404).json({ msg: "get all comments failed" }));
});
// //this is for testing purposes, using users instead of snippets to check comments
// router.get('user/:user_id', (req, res) => {
//   Comment.find({ user : req.params.user_id }) //returns array?
//     .then(comments => res.json(comments))
//     .catch(err => res.status(404).json({ error: "no comments found for user" }))
// })

// router.get('/snippet/:snippet_id', (req, res) => {
//   Comment.find({ snippet: req.params.snippet_id})
//     .then(comments => res.json(comments))
//     .catch(err => res.status(404).json({ error: err }))
// })

//create new, change to '/'
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newComment = new Comment({
      user: req.body.userId,
      snippet: req.body.snippetId,
      body: req.body.body,
    });

    newComment
      .save()
      .then(() => {
        Comment.find()
          .then((comments) => res.json(comments))
          .catch((err) =>
            res.status(404).json({ msg: "get all comments failed" })
          );
      })
      .catch((err) => res.status(404).json({ msg: "error saving Comment" }));
  }
);

//update comment
router.patch(
  "/update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const commentId = req.body.commentId;

    Comment.findOne({ _id: commentId }).then((comment) => {
      comment.body = req.body.body;
      comment.save().then(() => {
        Comment.find()
          .then((comments) => res.json(comments))
          .catch((err) =>
            res.status(404).json({ msg: "get all comments failed" })
          );
      });
    });
  }
);

//delete
router.delete(
  "/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const commentId = req.params.comment_id;
    Comment.deleteOne({ _id: commentId })
      .then(() => {
        Comment.find()
          .then((comments) => res.json(comments))
          .catch((err) =>
            res.status(404).json({ msg: "get all comments failed" })
          );
      })
      .catch((err) => console.log(err));
  }
);

module.exports = router;
