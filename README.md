# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @zezking/lotide`

**Require it:**

`const _ = require('@zezking/lotide');`

**Call it:**

`const results1 = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: Return the first index of an array
- `tail(...)`: Return every index but the first index of an array
- `middle(...)`: Return the middle number of an array of numbers
- `flatten(...)`: Flatten nested array and Return a single array of all the values
- `eqArray(...)`: Check if two arrays are equal
- `eqObjects(...)`: Check if two objects are equal
- `countOnly(...)`: count how many times a key has appeared and which key user want to search
- `findkeyByValue(...)`: Return a key that match the value of user input
- `LetterPositions(...)`: Return of an array of postions of the letter you want to search
