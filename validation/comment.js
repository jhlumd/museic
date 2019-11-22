const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCommentInput(data) {
  let errors = {};

  data.body = validText(data.body) ? data.body : '';
  data.user = validText(data.user) ? data.user : '';

  if (Validator.isEmpty(data.body)) {
    errors.body = 'Comment cannot be empty';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};