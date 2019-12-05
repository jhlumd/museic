const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const accessKeys = require('../config/aws_keys_dev')

aws.config.update({
  secretAccessKey: accessKeys.AWS_SECRET_ACCESS_KEY, //remember to remove!
  accessKeyId: accessKeys.AWS_ACCESS_KEY_ID,
  region: accessKeys.REGION
});

const s3 = new aws.S3()

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Invalid File Type, only JPEG or PNG'), false);
  }
}


const upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: accessKeys.S3_BUCKET,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload
