let pattern = /^(\d{4}|\d{6})$/
function validatePIN (pin) {
    return pattern.test(pin)
  }