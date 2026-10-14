# JavaScript and TypeScript Learning Repository

This repository contains small, runnable examples for learning JavaScript and
TypeScript.

## JavaScript basics

The `chapter1_Js_basic` folder contains introductory JavaScript examples:

- `01_helloworld.js` and `02_math.js` introduce basic statements and arithmetic.
- `03_js_engine.js` and `04_let_engine.js` contain examples related to JavaScript
  execution and variable declarations.
- `chapter2_keyword_identifier` covers keywords, identifier naming conventions,
  comments, and interview questions. The identifier examples show valid names
  using letters, numbers, underscores, and `$`, along with invalid names that
  contain spaces or hyphens, use special characters, start with a number, or
  conflict with a keyword.
- `chapter2_keyword_identifier/chapter03_literals` introduces JavaScript literals
  and the difference between `null` and `undefined`.
- `chapter2_keyword_identifier/chapter03_literals/chapter_04_operator/chapter_05_increment_decrement_operator`
  contains operator examples, including `45_nullish_operator.js`, which
  demonstrates the nullish coalescing operator (`??`). It uses the fallback only
  when the left-hand value is `null` or `undefined`.

Run an example with [Node.js](https://nodejs.org/):

```sh
node chapter1_Js_basic/01_helloworld.js
```

Replace the example path with any `.js` file in the repository to run it.
