import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: "New name", age: 10 });
const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(document.getElementById('root'), user);
  userForm.render();
}
