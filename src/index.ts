import { UserEdit } from './views/UserEdit';
import { User, UserProp } from './models/User';

const user = User.buildUser({ name: "Default name", age: 10 });
const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
}
