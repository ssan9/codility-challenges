function CodelandUsernameValidation(str) { 
  if (str.length > 4 && str.length < 25) {
    console.log(str.length);
    if (str[0].match(/[a-zA-Z]/g)) {
      if (typeof(str) === 'string' || !isNaN(str) || typeof(str) === '_' && str[str.length - 1] !== '_') {
        return true;
      }
    }
  }
  return false;
}