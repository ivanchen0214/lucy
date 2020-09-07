import { MachineProp, MachineCapability } from '../Interfaces/Machine';

export class Machine<T extends MachineProp> implements MachineCapability {
  constructor(public prop: T) { }

  get = <K extends keyof T>(propName: string): T[K] => {
    return this.prop[propName];
  }

  // set = <K extends keyof T>(propName: string, value: T[K]): void => {
  //   this.prop[propName] = value;
  // }

  getAllProp(): T {
    return this.prop;
  }

  setIdentifier(setIdentifier: string): void {
    this.prop.identifier = setIdentifier;
  }

  setName(name: string): void {
    this.prop.name = name;
  }

  togglePower(): void {
    this.prop.powerStatus = !this.prop.powerStatus;
  }
}