
// Problem 1
const filterEvenNumbers = (numArr: number[]): number[] => {
    return numArr.filter((num) => {
       return num % 2 === 0;
    });
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));



// Problem 2
const reverseString = (str: string): string => {
    return [...str].reduce((rev, ch) => {
        return ch + rev;
    }, "");
};

console.log(reverseString("typescript"));



// Problem 3
const checkType = (strNum: string | number): string => {
    if (typeof strNum === "string") {
        return "String";
    }
    else {
        return "Number";
    }
};

console.log(checkType("Hello"));
console.log(checkType(42));



// Problem 4
const getProperty = <X>(user: X, key: keyof X) => {
    return user[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));



// Problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
};

const toggleReadStatus = (book: Book) => {
 return {
    ...book, // copies property of Book object
    isRead: true
 };
};

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));



// Problem 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  };
};

// subclass
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  };

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  };
};

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());



// Problem 7
const getIntersection = (numArr1: number[], numArr2: number[]): number[] => {
    const set = new Set(numArr1);

    const comnElem = numArr2.filter((num) => {
        return set.has(num);
    });
    
    return comnElem;
};

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
