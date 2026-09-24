export class ButtonUnactuallyException extends Error {
  constructor() {
    super()

    this.name = "ButtonUnactuallyException";
    this.message = "Кнопка вже не актуальна. Спробуйте все заново (/start)"

    Object.setPrototypeOf(this, ButtonUnactuallyException.prototype);
  }
}
