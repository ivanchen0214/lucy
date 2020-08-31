import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReports } from './reportTargets/ConsoleReports';
import { HtmlReports } from './reportTargets/HtmlReports';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(new WinAnalysis('Man United'), new HtmlReports());
// summary.buildAndPrintReport(matchReader.data);
const summary = Summary.winsAnalysisWithHtml('Man United');
summary.buildAndPrintReport(matchReader.data);