"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, 3, 11, 0]);
// const charactersCollection = new CharactersCollection('bcdsa');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(50);
linkedList.add(100);
linkedList.add(-5);
linkedList.add(-1);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
