module.exports = {
  isValid,
};

function isValid(shout) {
  const validationResult = {
    succesful: true,
    message: "",
  };
  if (!shout.message) {
    validationResult.message = "please provide the message";
  }
  if (shout.message && isString(shout.message)) {
    validationResult.message = "the message should be a string";
  }
  if (shout.message && isString(shout.message) && shout.message.length < 3) {
    validationResult.message = "the message should have at least 3 characters";
  }
  validationResult.successful = Boolean(validationResult.message === "");
  return validationResult;
}

function isString(message) {
  return Boolean(typeof message === "string");
}
