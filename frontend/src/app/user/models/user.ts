export class User {
  id: string;
  role: string;
  username: string;

  constructor(params) {
    Object.assign(this, params);
  }
}
