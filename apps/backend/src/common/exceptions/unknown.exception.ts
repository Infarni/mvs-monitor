export class UnknownException extends Error {
  constructor() {
    super()

    this.name = "UnknownException";
    this.message = "Unknown error";

    Object.setPrototypeOf(this, UnknownException.prototype)
  }
}
