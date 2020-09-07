import { Machine } from './Classes/Machine';

const machine = new Machine({
  identifier: 'P20200907',
  name: 'Printer',
  powerStatus: false
});

machine.set('identifier', 'P20200908');
console.log(machine.get('identifier'));
