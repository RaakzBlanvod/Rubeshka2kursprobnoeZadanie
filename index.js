import ArrayValidator from './src/ArraySchema.js';
import NumberValidator from './src/NumberSchema.js';
import ObjectValidator from './src/ObjectSchema.js';

class Validator {
  number() {
    return new NumberValidator();
  }

  array() {
    return new ArrayValidator();
  }

  object() {
    return new ObjectValidator();
  }
}

export default Validator;
