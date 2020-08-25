import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, 11, 0]);

numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("XeWBcD");

charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(100);
linkedList.add(-5);
linkedList.add(1);
linkedList.add(5);

linkedList.sort();
linkedList.print();