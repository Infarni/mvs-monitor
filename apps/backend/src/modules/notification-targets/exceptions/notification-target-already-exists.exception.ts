export class NotificationTargetAlreadyExists extends Error {
  constructor() {
    super()

    this.name = "NotificationTargetAlreadyExists";
    this.message = "NotificationTarget already exists";

    Object.setPrototypeOf(this, NotificationTargetAlreadyExists.prototype)
  }
}
