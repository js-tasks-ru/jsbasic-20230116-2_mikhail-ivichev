function checkSpam(str) {
  // ваш код...
  str = str.toString().toLowerCase();
  return str.includes('xxx') || str.includes('1xbet') || false;
}
checkSpam('1XbeT now') === true
checkSpam('free xxxxx') === true
checkSpam('innocent rabbit') === false
