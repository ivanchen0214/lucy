import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProp {
  id?: number;
  name?: string;
  age?: number;
};

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProp> = new Sync<UserProp>(rootUrl);
  public attributes: Attributes<UserProp>;

  constructor(attrs: UserProp) {
    this.attributes = new Attributes<UserProp>(attrs);
  }
}