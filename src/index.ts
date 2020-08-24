import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([10, 3, 11, 0]);
const charactersCollection = new CharactersCollection('bcdsa');

const sorter = new Sorter(charactersCollection);

sorter.sort();
console.log(sorter.collection);
