# TypeScript Type Error: Array to String

This repository demonstrates a common TypeScript error where an array of strings is passed to a function expecting a single string.

## Problem

The `greeter` function expects a single string argument. However, the `user` variable is an array of strings.

```typescript
function greeter(person: string): string {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); // Error!
```

This results in a type error because TypeScript correctly identifies that the argument types don't match.

## Solution

Several approaches can fix this:

1. **Change the function signature:** If the `greeter` function should accept an array, change its parameter type:

```typescript
function greeter(person: string[]): string {
    return "Hello, " + person.join(" ");
}
```

2. **Access individual elements:**  If you need to greet each element individually:

```typescript
function greeter(person: string): string {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];

user.forEach(name => console.log(greeter(name)));
```

3. **Use string concatenation with destructuring:**

```typescript
function greeter(person: string): string {
    return `Hello, ${person}`;
}

let [firstName, lastName] = user;
console.log(greeter(firstName + " " + lastName));
```

Choose the solution that best fits your program's logic.