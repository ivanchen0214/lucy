import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinAnalysis implements Analyzer {
  constructor(public team: string) { }

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === 'H') {
        wins++;
      }
      else if (match[2] === this.team && match[5] === 'A') {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins}`;
  }
}