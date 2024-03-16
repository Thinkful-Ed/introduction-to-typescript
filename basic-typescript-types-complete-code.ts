// String basic type example
let greeting: string = "Welcome to TypeScript";
let title: string = `Course: Introduction to ${greeting.split(' ')[2]}`;

// Number basic type example
let temperature: number = 25.3;
let score: number = temperature * 2;  // Arbitrary calculation

// Boolean basic type example
let isActive: boolean = true;
let canProceed: boolean = isActive && temperature > 20;

// Array basic type example: Square brackets syntax
let fibonacci: number[] = [1, 1, 2, 3, 5, 8, 13];

// Array basic type example: Array<type> syntax
let cities: Array<string> = ["Tokyo", "London", "New York"];

// Generics
function firstElement<T>(elements: T[]): T | undefined {
    return elements.length > 0 ? elements[0] : undefined;
}

let names = ["Alice", "Bob", "Charlie"];
let ages = [30, 25, 35];

let firstName = firstElement(names); // Automatically inferred as firstElement<string>
let firstAge = firstElement(ages); // Automatically inferred as firstElement<number>

// Typle basic type example
let book: [string, string, number] = ["The Hobbit", "J.R.R. Tolkien", 295];

// Enum basic type example
enum StatusCode { 
  Success = 200, 
  NotFound = 404, 
  Error = 500 
}
let response: StatusCode = StatusCode.Success;
