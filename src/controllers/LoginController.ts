import { Request, Response } from 'express';
import { get, controller } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response) {
    res.send(`
      <form method="post">
        <div>
          <label>User Email</label>
          <input name="email" />
        </div>
        <div>
          <label>User password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }
}