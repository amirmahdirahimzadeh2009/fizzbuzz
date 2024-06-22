function fizzBuzzChallenge() {
  let number = prompt("what's your number?");
  Number(number);
  function check() {
    switch (true) {
      case number % 5 == 0 && number % 3 == 0:
        alert("FizzBuzz");
        fizzBuzz();
        break;

      case number % 5 == 0:
        alert("Fizz");
        fizzBuzz();
        break;

      case number % 3 == 0:
        alert("Buzz");
        fizzBuzz();
        break;

      default:
        alert("False");
        break;
    }
  }
  check();
}
fizzBuzzChallenge();
