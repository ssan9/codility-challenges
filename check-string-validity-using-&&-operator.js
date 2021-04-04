function CodelandUsernameValidation(str) { 
  if ((str.length > 4 && str.length < 25) && (str[0].match(/[a-zA-Z]/g)) && str.match('^[a-zA-Z_0-9]*$') && (str[str.length - 1] !== '_')) {
    return true;
  }
  return false;
}