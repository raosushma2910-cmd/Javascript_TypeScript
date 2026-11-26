# JavaScript Learning Repository

This repository contains small JavaScript examples organized into chapter
folders at the repository root. Each chapter folder contains its examples
directly, rather than nesting later chapters inside earlier ones.

## Prerequisites

- [Node.js](https://nodejs.org/) for running JavaScript examples
- npm packages defined in `package.json` for TypeScript and Playwright

Install the project dependencies with:

```sh
npm install
```

## Running examples

Run an example with [Node.js](https://nodejs.org/), for example:

```sh
node 01_Chapter_Js_basic/01_helloworld.js
```

Replace the example path with any `.js` file in the repository.

Run a TypeScript file with `ts-node` or compile it with the TypeScript compiler:

```sh
npx tsc 35_Chapter_Obstract_class/239_Abstract.ts
```

The repository covers JavaScript basics, operators, statements, loops,
arrays, functions, closures, objects, promises, async/await, classes,
inheritance, abstraction, generics, Playwright, and TypeScript.

## Learning notes

- [TypeScript: `any` vs `unknown`](00_Learning/any-vs-unknown.md) compares their type-safety behavior in a table.
- [JavaScript, TypeScript, and Playwright revision notes](00_Learning/javascript-typescript-playwright-revision-notes.pdf) is a chapter-by-chapter PDF cheat sheet with code examples and diagrams; the [editable HTML source](00_Learning/javascript-typescript-playwright-revision-notes.html) is also available.
- In VS Code, press `Ctrl+Shift+V` to see a rendered Markdown preview, or `Ctrl+K V` to open it to the side.
