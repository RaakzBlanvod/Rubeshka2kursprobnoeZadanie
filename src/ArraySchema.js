class ArrayValidator {
  constructor() {
    this.checkIntegers = false; // Флаг для проверки на целые числа
    this.customValidator = null; // Хранит кастомный валидатор
  }

  isValid(value) {
    // Проверяем, является ли value массивом
    if (!Array.isArray(value)) {
      return false;
    }

    // Если требуется проверка на целые числа, проверяем каждый элемент
    if (this.checkIntegers) {
      return value.every((element) => Number.isInteger(element));
    }

    // Если задан кастомный валидатор, применяем его
    if (this.customValidator) {
      return value.every((element) => this.customValidator(element));
    }

    return true; // Если не требуется проверка, просто возвращаем true
  }

  // Метод для установки флага проверки на целые числа
  allIntegers() {
    this.checkIntegers = true; // Устанавливаем флаг
    return this; // Возвращаем текущий объект для цепочной записи
  }

  // Метод для установки кастомного валидатора
  custom(validator) {
    this.customValidator = validator; // Сохраняем кастомный валидатор
    return this; // Возвращаем текущий объект для цепочной записи
  }
}

export default ArrayValidator;
