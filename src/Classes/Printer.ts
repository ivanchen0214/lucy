import { MachineProp } from '../Interfaces/Machine';
import { PrinterProp, PrinterCapability } from '../Interfaces/Printer';

import { Machine } from './Machine';

export class Printer<T1, T2> extends Machine<T1> implements PrinterCapability {
  // static buildPrinter(machineProp: MachineProp, printerProp: PrinterProp): Printer<MachineProp, PrinterProp> {
  //   return new Printer(machineProp, printerProp);
  // }

  constructor(machineProp: T1, printerProp: T2) {
    super(machineProp);
    this.prop = Object.assign({}, super.getAllProp(), printerProp);
  }

  start(): void {
    console.log('start');
  }
}