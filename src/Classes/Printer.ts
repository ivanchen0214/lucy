import { Machine } from './Machine';

export class Printer<T> extends Machine<T> {
  constructor(prop: T) {
    super(prop);
  }
}