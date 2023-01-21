function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) {
    return str.substring(0, maxlength - 1) + "…";
   }
    return str;
}
truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) === 'Вот, что мне хотело…';

truncate('Всем привет!', 20) === 'Всем привет!';
