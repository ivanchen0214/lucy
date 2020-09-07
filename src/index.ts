import { Machine } from './Classes/Machine';

const machine = new Machine({
  identifier: 'P20200907',
  name: 'Printer',
  powerStatus: false
});

console.log(machine.get('identifier'));
