const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSnippetInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title cannot be empty';
  }

  // add validators for other fields (google validator github)

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
