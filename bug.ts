function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //Error: Argument of type 'string[]' is not assignable to parameter of type 'string'.