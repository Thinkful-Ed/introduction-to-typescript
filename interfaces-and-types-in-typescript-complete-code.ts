// Interface example

interface Car {
    make: string;
    model: string;
    mileage: number;
    color?: string; 
    start(): void;
    stop(): void;
}

function operateCar(car: Car) {
    car.start();
    // Additional logic
    car.stop();
}

function driveCar(car: Car) {
    car.start();
    car.accelerate(); // This line will cause an error: Property 'accelerate' does not exist on type 'Car'.
    car.stop();
}

function describeCar(car: Car) {
    console.log(`A ${car.make} ${car.model}, Mileage: ${car.mileage}`);
    if (car.color) {
        console.log(`Color: ${car.color}`);
    }
}

describeCar({
  make: "Toyota",
  model: "Corolla",
  mileage: 50000,
  start: () => console.log("Car started"),
  stop: () => console.log("Car stopped")
}); // Color is optional

// Type example

type UserID = number;
type Email = string;

interface UserProfile {
    id: UserID;
    email: Email;
    name: string;
}

function createUserProfile(id: UserID, email: Email, name: string): UserProfile {
    return { id, email, name };
}

let newUser: UserProfile = createUserProfile(12345, "user@example.com", "Alice");

console.log(newUser);

// Primitive types

let isActive: boolean = true;
let isComplete: boolean = false;

let itemCount: number = 10;
let price: number = 99.99;

let userName: string = "Alice";
let greeting: string = `Hello, ${userName}!`;

let emptyValue: null = null;
let notInitialized: undefined = undefined;

let largeNumber: bigint = 9007199254740991n;

// API response with error handling

type UserData = {
  name: string;
  age: number;
};

type ApiResponse<T> = { status: 'success'; data: T; } | { status: 'error'; message: string; };

function fetchUserData(userId: number): ApiResponse<UserData> {
    // Fetch logic...
    // For demonstration, returning a success or error response conditionally
    if (userId === 1) {
        return { status: 'success', data: { name: 'Alice', age: 30 } };
    } else {
        return { status: 'error', message: 'User not found' };
    }
}

const response = fetchUserData(1);
if (response.status === 'success') {
    console.log(`User Name: ${response.data.name}`);
} else {
    console.log(`Error: ${response.message}`);
}

// Intersection types

interface Employee {
    name: string;
    employeeId: number;
}

interface Manager {
    department: string;
    scheduleMeeting: (date: Date) => void;
}

type EmployeeManager = Employee & Manager;

let manager: EmployeeManager = {
    name: "Alice",
    employeeId: 12345,
    department: "Finance",
    scheduleMeeting: (date) => { console.log(`Meeting scheduled on ${date}`); }
};

manager.scheduleMeeting(new Date());
