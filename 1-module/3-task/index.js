function ucFirst(str) {
  // ваш код...
  return str.charAt(0).toUpperCase() + str.slice(1);
}
ucFirst('вася') === 'Вася';
ucFirst('в') === 'В';
ucFirst('') === '';
