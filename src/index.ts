import { Printer } from './Classes/Printer';

const printer = new Printer(
  {
    identifier: 'P2020',
    name: 'Printer',
    powerStatus: false
  },
  {
    papers: [
      {
        type: "A4",
        size: "100*100"
      }
    ]
  }
);

console.log(printer);