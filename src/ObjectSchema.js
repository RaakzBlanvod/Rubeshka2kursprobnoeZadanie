class ObjectValidator {
  constructor() {
    this.shapeValidators = {};
  }

  shape(validators) {
    this.shapeValidators = validators;
    return this;
  }

  isValid(value) {
    if (typeof value !== 'object' || value === null) {
      return false;
    }

    return Object.keys(this.shapeValidators).reduce((isValid, key) => {
      const validator = this.shapeValidators[key];

      // Понимание, если валидатор - это объект (включая вложенные объекты)
      const propertyValue = value[key];
      if (validator instanceof ObjectValidator) {
        return isValid && validator.isValid(propertyValue);
      }
      return isValid && validator.isValid(propertyValue);
    }, true);
  }
}

export default ObjectValidator;
