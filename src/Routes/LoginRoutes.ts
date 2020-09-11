import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted!');
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  console.log(req.session);
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div> You're logged in!</div>
        <a href="/logout">Logout</a>
      </div>
    `)
  } else {
    res.send(`
      <div>
        <div> You're not logged in!</div>
        <a href="/login">Login</a>
      </div>
    `);
  }
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

router.get('/logout', (req: Request, res: Response) => {
  req.session = null;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user!');
});

export { router };