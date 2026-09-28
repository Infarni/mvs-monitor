export class TgUserAlreadyExistsException extends Error {
  constructor() {
    super()

    this.name = "TgUserAlreadyExistsException";
    this.message = "Користувач вже зареєстрований в системі"

    Object.setPrototypeOf(this, TgUserAlreadyExistsException.prototype)
  }
}
