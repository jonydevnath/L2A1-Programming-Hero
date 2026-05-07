## **Title**: How Generics Allow You Write Reusable and Safe Code in TypeScript

### **Introduction**
In TypeScript, we often write functions for different data types. Sometimes we repeat the same logic for numbers, strings, or objects. Generics help solve this problem. They let us write one function that works for many types, but still stays safe.

---

What Are Generics?

Generics are like a placeholder for a type. We use `<X>`to represent a type and here `X` can be any type (number, string, object, etc.)

**A Function For Only User**
```js
type User = {
  id: number;
  name: string;
  age: number;
};

const getProperty = (user: User, key: keyof User) => {
  return user[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

console.log(getProperty(user, "name"));
```
So, In here the function will only work for User. we cannot reuse it for any other purpose. So that's where Generics comes to increase the reusability. 

**A Function For Generics Purpose**

```js
const getProperty = <X>(user: X, key: keyof X) => {
    return user[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
const product = { brand: "HP" };

console.log(getProperty(user, "name"));
console.log(getProperty(product, "brand"));
```
So, this is a reuseable Generics Function. In here the `X` us a type Placeholder and input and output use the same type. The Typescript keeps everything correct. In this Generics Function the function work for different object. 

So, Generics means reusable and safe and can be use for many types and types stays correct at the same time. It also reduce bugs from the code.

---

### **Conclusion**

Generics help you build flexible and reusable code. They allow your functions and components to work with any data type, but still keep strict type checking. This makes your code cleaner, safer, and easier to use.
