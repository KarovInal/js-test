function FormatError(message) {
    this.name = 'FormatError';
    this.message = 'ошибка форматирования';
    this.stack = (new SyntaxError).stack;
}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

var err = new FormatError("ошибка форматирования");
console.log(err instanceof SyntaxError);