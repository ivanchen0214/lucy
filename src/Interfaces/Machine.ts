export interface MachineProp {
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