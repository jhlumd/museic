const express = require("express");
const router = express.Router();
const passport = require('passport');

const Like = require('../../models/Like')

//get all
router.get('/', (req, res) => {
  Like.find()
    .then(likes => res.json(likes))
    .catch(err => res.status(404).json({ msg: 'get all likes failed' }))
});

//retreives likes for a given snippet_id
router.get('/:snippet_id', (req, res) => {
  Like.find({ snippet: req.params.snippet_id})
    .then(likes => res.json(likes))
    .catch(err => res.status(404).json({ error: err }))
});

router.post('/', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    Like.findOne(
      { user: req.body.userId, snippet: req.body.snippetId }
    )
    .then( doc => {
      if(doc) {
        return res.status(403).json( {msg: "Can only heart once!"} )
      }
      
      const newLike = new Like({
        user: req.body.userId,
        snippet: req.body.snippetId
      })
      
      newLike.save()
        .then( () => {
          Like.find()
          .then(likes => res.json(likes))
        })
    });
  });

//delete like
router.delete('/:like_id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // console.log(req.params.like_id)
    Like.deleteOne({_id: req.params.like_id})
      .then( () => {
        Like.find().then(likes => res.json(likes))
      })
      .catch(err => res.status(404).json({msg: 'error deleting like'}))
  }
);

module.exports = router;