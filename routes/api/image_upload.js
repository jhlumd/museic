const express = require("express");
const router = express.Router();
const passport = require("passport");

const Photo = require('../../models/Photo');

const upload = require('../../services/file_upload');

const singleUpload = upload.single('image');
//'image' is the key we are sending under inside the body of the formdata request

//get all
router.get('/',
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Photo.find()
      .then(images => res.json(images))
      .catch(err => res.status(404).json(err))
  }
);

//upload to AWS
router.post('/upload',
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {

    singleUpload(req, res, function (err) {

      if (err) {
        return res.status(422).json({
          errors:
            { title: 'File Upload Error', detail: err.message }
        })
      }

      return res.json({ 'imageUrl': req.file.location })
    });
  });

//save to database if successfully uploaded
router.post('/save',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newPhoto = new Photo({
      user: req.body.userId,
      aws_url: req.body.imageUrl
    })

    const oldPhotoId = req.body.oldPhotoId

    newPhoto.save()
      .then(() => {
        Photo.find().then(photos => res.json(photos))
      })
      .then(() => {
        Photo.deleteOne({ _id: oldPhotoId }) //removes prev photo
      })
  }
);

//delete
router.delete('/:photo_id',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const photoId = req.params.photo_id;
    Photo.deleteOne({ _id: photoId })
      .then(() => res.json({ msg: `PhotoId: ${photoId} deleted` }))
      .catch(err => res.status(404).json(err))
  }
);

module.exports = router;
