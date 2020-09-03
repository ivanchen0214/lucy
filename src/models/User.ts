import { Eventing } from './Eventing';

interface userProp {
  id?: number;
  name?: string;
  age?: number;
};

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: userProp) { }

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: userProp): void {
    Object.assign(this.data, update);
  }
}