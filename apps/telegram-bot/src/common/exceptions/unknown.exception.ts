export class UnknownException extends Error {
  constructor() {
    super()

    this.name = "UnknownException";
    this.message = "Сталась невідома помилка"

    Object.setPrototypeOf(this, UnknownException.prototype);
  }
}
