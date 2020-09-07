import { Printer } from './Classes/Printer';

const printer = new Printer({
  identifier: 'P2020',
  name: 'Printer',
  powerStatus: false
});

console.log(printer.getAllProp());