import { View } from './View';
import { User, UserProp } from '../models/User';

export class UserShow extends View<User, UserProp> {
  template(): string {
    return `
      <div>
        <div>User Detail</div>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}