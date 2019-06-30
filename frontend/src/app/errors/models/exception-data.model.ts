export class ExceptionData {
  uuid: string;
  message: string;
  stack: string;

  constructor({uuid, message, stack}) {
    this.uuid = uuid;
    this.message = message;
    this.stack = stack;
  }
}
