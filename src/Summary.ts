import { MatchData } from "./MatchData";
import { WinAnalysis } from './analyzers/WinAnalysis';
import { HtmlReports } from './reportTargets/HtmlReports';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtml(team: string): Summary {
    return new Summary(
      new WinAnalysis('Man United'),
      new HtmlReports()
    );
  }

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) { }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }

}