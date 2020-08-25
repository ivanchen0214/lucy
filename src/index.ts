import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, 11, 0]);
// const charactersCollection = new CharactersCollection('bcdsa');
const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(100);
linkedList.add(-5);
linkedList.add(-1);

const sorter = new Sorter(linkedList);

sorter.sort();
linkedList.print();
