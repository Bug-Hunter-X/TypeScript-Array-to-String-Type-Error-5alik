function greeter(person: string[]): string {
    return "Hello, " + person.join(" ");
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //Output: Hello, Jane Doe
//Alternative solution
function greeter(person: string):string{
    return "Hello, "+ person;
}

user.forEach(element => {
    console.log(greeter(element));
});