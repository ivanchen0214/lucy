export interface Prop {
  identifier?: string;
  name?: string;
  powerStatus?: boolean;
}

export interface Capability {
  setIdentifier: (identifier: string) => void;
  setName: (name: string) => void;
  togglePower: (status: boolean) => void;
}