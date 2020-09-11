export type PropType = {
  [key: string]: any;
}

export interface MachineProp extends PropType {
  identifier?: string;
  name?: string;
  powerStatus?: boolean;
}

export interface MachineCapability {
  getAllProp: () => MachineProp;
  setIdentifier: (identifier: string) => void;
  setName: (name: string) => void;
  togglePower: () => void;
}