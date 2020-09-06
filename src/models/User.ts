import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Collection } from './Collection';

export interface UserProp {
  id?: number;
  name?: string;
  age?: number;
};

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProp> {
  static buildUser(attrs: UserProp): User {
    return new User(
      new Attributes<UserProp>(attrs),
      new Eventing(),
      new ApiSync<UserProp>(rootUrl)
    )
  }

  static buildUserCollection(): Collection<User, UserProp> {
    return new Collection(
      rootUrl,
      (json: UserProp) => User.buildUser(json)
    );
  }
}