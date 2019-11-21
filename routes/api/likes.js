const express = require("express");
const router = express.Router();
const passport = require('passport');

const Like = require('../../models/Like')

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
      .then( like => {
        // console.log(like) 
        res.json(like) 
      })
    });
  });

router.delete('/:like_id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const likeId = req.params.like_id

    Like.deleteOne({_id: likeId})
      .then( ()=> res.json(
        {msg: `like with id: ${likeId} deleted`}
      ))
      .catch(err => console.log(err))
  }
);

module.exports = router;