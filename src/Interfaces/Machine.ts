export interface Prop {
  identifier?: string;
  name?: string;
  powerStatus?: boolean;
}

export interface Capability {
  getAllProp: () => Prop;
  setIdentifier: (identifier: string) => void;
  setName: (name: string) => void;
  togglePower: () => void;
}