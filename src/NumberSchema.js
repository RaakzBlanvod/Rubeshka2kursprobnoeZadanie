class NumberValidator {
  isNumber(num) {
    return typeof num === 'number'; // && !isNaN(num)
  }

  isValid(num) {
    return this.isNumber(num);
  }
}

export default NumberValidator;
