import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');
const reader = new MatchReader(csvFileReader);
reader.load();

console.log(reader.data);

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === 'H') {
  }
  else if (match[2] === 'Man United' && match[5] === 'A') {
  }
}