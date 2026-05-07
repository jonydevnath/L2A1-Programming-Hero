## **Title**: Why is any labeled as Unsafe and why unknown is Safer in TypeScript

### **Introduction**
TypeScript helps us write safe code. It checks types and shows errors early means before **Runtime** we can see Errors and that's how we fix the error. By fixing the errors early we can write batter and safe code. But sometimes, we use `any` or `unknown`. These are used when we do not know the data type.

---

**Why `any` is a Type Safety Hole?**

So what `any` means is no type checking. TypeScript will allow everything and that kind of like the old Javascript.Typescript was created to check type but if it's not checking the type then it cannot show error and so we cannot fix the code before **Runtime**. so that Big Safety Hole in Typescript.

**An Example**
```js
let name: any = "Jony";
name = 10;
name.toUpperCase(); // no warring or error but it will crash in runtime.
```
**In-short the problem with `any`:**
- No error from TypeScript
- Wrong code can run
- Bugs are hard to find

So the `any` break the safety or the real meaning of the Typescript.


**Why unknown is Safer?**

That's where `unknown` comes means is safer than `any`.
what `unknown` really means is it does not know the data type but you must check the type before using it.

**Here is an Example**
```js
let name: unknown = "jony";

if (typeof value === "string") { // If not check here show error 
  console.log(value.toUpperCase());
}
```

**why you should use `unknown` instead of `any`?**
The Typescript forces you to check the type and prevent the code from wrong operation and make the code way safer.

**What is Type Narrowing?**
The type narrowing comes form the `unknown` type.`unknown`force you to check the type. As you have to check for the type before you use it, you need to narrow down the type that is actually Type Narrowing. In short making the type more specific after checking.

**Here is Example of Type Narrowing**
```js
// len of the string
const len = (name: unknown) => {
if (typeof name === "string") { // checking here is it string or not
    return name.length; 
  }
}

console.log(len("jony"));
```

---
### **Conclusion**
`any` type is unsafe in Typescript because it skips type checking and typescript loss is meaning. It creates a type safety hole. So `unknown` is way much safer that `any` because it needs type checks. Further more type narrowing helps make types clear and safe. So to write batter and clean and error free code use `unknown` instead of `any`.