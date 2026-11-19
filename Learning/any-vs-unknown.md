# TypeScript: `any` vs `unknown`

| Comparison | `any` | `unknown` |
|---|---|---|
| Meaning | Disables type checking for this value. | The value can be anything, but its type must be checked before use. |
| Can hold any kind of value? | Yes. | Yes. |
| Can use properties or call methods immediately? | Yes. TypeScript allows it, even if the operation will fail at runtime. | No. First narrow the type or validate the value. |
| Can assign to a specific type without checking? | Yes; this can hide bugs. | No; check or narrow it first. |
| Example | `let x: any = "hello"; x.toUpperCase(); x.notAFunction();` The last call compiles but fails at runtime. | `let x: unknown = "hello"; if (typeof x === "string") { x.toUpperCase(); }` The `typeof` check narrows `x` to `string`. |
| When to use | Avoid when possible. Use only when intentionally opting out of type safety. | Prefer when the value's type is not known yet, such as data from an API or user input. |
| Remember | "`any`" means "skip checking." | "`unknown`" means "check before using." |
