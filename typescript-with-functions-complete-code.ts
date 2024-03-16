// Function with typed parameters and return type
function addNumbers(a: number, b: number): number {
    return a + b;
}

function concatenateStrings(first: string, second: string): string {
    return first + second;
}

// Function with interface parameters
interface User {
    name: string;
    age: number;
}

function greetUser(user: User): string {
    return `Hello, ${user.name}!`;
}

greetUser({ name: "Alice" }); // Error: Property 'age' is missing
greetUser({ name: "Bob", age: "thirty" }); // Error: Type 'string' is not assignable to type 'number'.
greetUser({ name: "Charlie", age: 30, location: "New York" }); // Error: Object literal may only specify known properties

// Function with optional parameters
function createGreeting(name: string, includeTimeOfDay?: boolean): string {
    let greeting = `Hello, ${name}`;
    if (includeTimeOfDay) {
        const hour = new Date().getHours();
        const timeOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
        greeting += ` and good ${timeOfDay}`;
    }
    return greeting;
}
