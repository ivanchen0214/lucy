import { Capability } from '../Interfaces/Machine';
export class Machine<T> implements Capability {
  constructor(public prop: T) { }

  get = <K extends keyof T>(propName: string): T[K] => {
    return this.prop[propName];
  }

  set = <K extends keyof T>(propName: string, value: T[K]): void => {
    this.prop[propName] = value;
  }
}