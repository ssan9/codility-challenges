function CodelandUsernameValidation(str) { 
  if (str.length <= 4 || str.length >= 25) {
    console.log('hi');
    return false;
  }

  if (!str[0].match(/[a-zA-Z]/g)) {
    return false;
  }

  if (!str.match('^[a-zA-Z_0-9]*$')) {
    return false;
  }

  if (str[str.length - 1] === '_') {
    return false;
  }

  return true;
}

console.log(CodelandUsernameValidation("a4_32"))