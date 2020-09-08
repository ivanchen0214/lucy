import { View } from './View';
import { UserShow } from './UserShow';
import { UserForm } from './UserForm';
import { User, UserProp } from '../models/User';

export class UserEdit extends View<User, UserProp> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    }
  }

  onRender() {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}