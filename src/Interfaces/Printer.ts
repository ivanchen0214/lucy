export interface PrinterProp {
  papers: [{ type: string, size: string }];
}

export interface PrinterCapability {
  start: () => void;
}