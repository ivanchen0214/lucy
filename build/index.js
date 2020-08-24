"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([10, 3, 11, 0]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('bcdsa');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);
