function factorial(n) {
  // ваш код...
  if(n == 0) {
    return 1
  }
  for(let i = n;--i; ) {
    n *= i;
  }
  return n
}
factorial(0);
factorial(1);
factorial(3);
factorial(5);
