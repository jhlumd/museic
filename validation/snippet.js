const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSnippetInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title is required';
  }

  // if (Validator.isEmpty(data.notes)) {
  //   errors.notes = 'You must record a snippet';
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
