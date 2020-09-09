import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hi there!');
});

router.get('/login', (req: Request, res: Response) => {
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
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "hi@hi.hi" && password === "password") {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send("Invalid email or password!");
  }
});

export { router };