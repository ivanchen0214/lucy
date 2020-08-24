import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, 11, 0]);
const sorter = new Sorter(numbersCollection);

sorter.sort();
console.log(sorter.collection);
