export class Attributes<T> {
  constructor(private data: T) { }

  get = <K extends keyof T>(key: string): T[K] => {
    return this.data[key];
  }

  getAll(): T {
    return this.data;
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}