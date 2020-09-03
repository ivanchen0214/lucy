import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProp {
  id?: number;
  name?: string;
  age?: number;
};

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProp> = new Sync<UserProp>(rootUrl);

  constructor(private data: UserProp) { }

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: UserProp): void {
    Object.assign(this.data, update);
  }
}