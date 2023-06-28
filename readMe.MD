# React Typescript Tutorial for Beginners

[:link: Youtube Link Here](https://www.youtube.com/watch?v=xTVQZ46wc28&ab_channel=DaveGray)

***Video TimeStamps***
React Typescript Tutorial for Beginners

(00:00) Intro
(00:11) Welcome
(00:32) Setup & Starter Code
(03:39) Function Components
(05:16) Component Return Types
(06:24) Heading Component Example
(07:34) Old Code You May See
(10:09) Recommended Code & Default Values
(14:45) useState hook
(16:11) Simple Counter Example
(17:45) Passing Down setState & children
(21:19) Generic List Example

Web Dev Roadmap for Beginners (Free!): https://bit.ly/DaveGrayWebDevRoadmap

In this React Typescript Tutorial for beginners you will learn about function components, passing props, default values, passing setState, and all of the associated TS types and return types. React + Typescript!

---

### Getting Started

1. Install
```
npm create vite@latest
```
2. Name your project 
```
Project name: … reactTypescript
```
3. Select `React` Framework
4. Select `TypeScript` variant
4. Run your project
```
  cd reactTypescript
  npm install
  npm run dev
```
---
#### [React ES7 Snippets -  VS Code Extension](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) :link: 

[Snippets Here](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)

---
#### Handling Legacy Code

```
import React from "react";

// Legacy Code you may encounter
export const Section: React.FC <{title: String}> = ({children, title}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}
```
#### Updated to: 

```
import{ ReactNode } from "react";


type SectionProps = {
    title?: string, // ? indicates optional, so you can provide a default subheading i.e." My Subheading"
    children: ReactNode
}

export const Section = ({children, title = "My Subheading"}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}
```
---

#### App.tsx
```
import Heading from "./components/Heading"
import Counter from "./components/Counter"
import List from "./components/List"
import { Section } from "./components/Section"

import { useState } from "react"

function App() {
  const [count, setCount] = useState<number>(1)

  return  (
    <>
      <Heading title={"Hello"} />
      <Section title="Different Title">This is my section</Section>
      <Counter setCount={setCount}>Count A is {count} </Counter>
      <List items={["🍵 Coffee", "🌮 Tacos", "  💻  Code"]} render={(item: string) => <span className="bold">{item}</span>}/>
    </>
 
    )
}

export default App

```

### Heading.tsx
```
import { ReactElement } from "react"

type HeadingProps = {title : string}

const Heading = ( {title}: HeadingProps) : ReactElement => {
  return <h1> {title}</h1>
}

export default Heading
```
### Section.tsx

```
import{ ReactNode } from "react";


type SectionProps = {
    title?: string, // ? indicates optional, so you can provide a default subheading i.e." My Subheading"
    children: ReactNode
}

export const Section = ({children, title = "My Subheading"}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}
```

#### Counter.tsx
```
import { ReactNode } from "react"

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

const Counter = ({setCount, children}: CounterProps) => {
  return (
    <>
    <h1> Count is {children}</h1>
    <button onClick={()=> setCount(prev => prev + 1)}>+</button>
    <button onClick={() => setCount(prev => prev - 1)}>-</button>

    </>
  )
}


export default Counter
```

#### List.tsx
```
import { ReactNode } from "react";

interface  ListProps<T> { // 'T' indicates a generic
    items: T[],
    render: (item: T) => ReactNode
}

// Both of these work
// const List = <T,>
// OR
//const List = <T extends {}>
const List = <T,>({items, render}: ListProps<T>) => {
  return (
    <ul>
        {items.map((item, i) =>(
            <li key={i}>
                 {render(item)}
            </li>
        ))}
    </ul>
  )
}

export default List


```

---
### Generics
In TypeScript, generics allow you to create reusable components and functions that can work with different types without sacrificing type safety. They provide a way to define placeholders for types that are determined when the component or function is used.

Here are a few examples of how generics can be used in TypeScript:

1. **Generic Functions:**
   ```typescript
   function identity<T>(arg: T): T {
     return arg;
   }

   // Usage
   let result = identity<string>("Hello");
   console.log(result); // Output: Hello

   let numberResult = identity<number>(42);
   console.log(numberResult); // Output: 42
   ```

   In the `identity` function above, `T` is a generic type parameter. It acts as a placeholder for the type of the argument and the return value. When the function is called, the type of `arg` and the return type will be inferred based on the argument passed.

2. **Generic Classes:**
   ```typescript
   class Queue<T> {
     private items: T[] = [];

     enqueue(item: T): void {
       this.items.push(item);
     }

     dequeue(): T | undefined {
       return this.items.shift();
     }
   }

   // Usage
   const numberQueue = new Queue<number>();
   numberQueue.enqueue(1);
   numberQueue.enqueue(2);
   console.log(numberQueue.dequeue()); // Output: 1

   const stringQueue = new Queue<string>();
   stringQueue.enqueue("Hello");
   stringQueue.enqueue("World");
   console.log(stringQueue.dequeue()); // Output: Hello
   ```

   The `Queue` class above is a generic class that can hold items of any type. The type parameter `T` is used to define the type of the items in the queue.

3. **Generic Interfaces:**
   ```typescript
   interface Pair<T, U> {
     first: T;
     second: U;
   }

   // Usage
   const pair: Pair<number, string> = {
     first: 42,
     second: "Hello",
   };

   console.log(pair.first); // Output: 42
   console.log(pair.second); // Output: Hello
   ```

   The `Pair` interface represents a pair of values, where the first value has type `T` and the second value has type `U`. When using the interface, you can specify the specific types for `T` and `U`.

These are just a few examples of how generics can be used in TypeScript. They provide flexibility and type safety, allowing you to create reusable and type-aware components and functions.

The two generic syntaxes you provided, `const List = <T,>` and `const List = <T extends {}>`, are examples of generic type parameters in TypeScript. Let's break down each syntax and explain why they work:

1. `const List = <T,>`
   In this syntax, `<T>` represents a generic type parameter without any constraints or bounds. It means that `T` can be any type.

   Example usage:
   ```typescript
   const myList: List<number> = [1, 2, 3];
   ```

   This syntax allows you to create a generic type `List` and specify the type when using it. The type parameter `T` is flexible and can be replaced with any type when using `List`.

2. `const List = <T extends {}>`
   In this syntax, `<T extends {}>` represents a generic type parameter with a constraint or bound. It means that `T` must be a type that extends or implements `{}`, which is an empty object type.

   Example usage:
   ```typescript
   const myObjectList: List<{ name: string }> = [{ name: "Alice" }, { name: "Bob" }];
   ```

   This syntax allows you to create a generic type `List` but restricts the type parameter `T` to be an object type (or a type that extends an object type). The constraint `{}` ensures that `T` must be assignable to an empty object, so it can include properties and methods.

By using generic type parameters, you create reusable components or functions that can work with different types while maintaining type safety. The syntax `<T>` defines the generic type parameter, and additional constraints can be added using the `extends` keyword followed by the desired constraint.

#### Generics vs. Any
While generic type parameters can sometimes be used in a similar manner to the `any` type in TypeScript, there are important differences between them.

1. Type Safety: Generics offer stronger type safety compared to the `any` type. When using generics, the type parameter is preserved throughout the code, allowing TypeScript to enforce type checking and provide IntelliSense support, catching potential type-related errors at compile-time. In contrast, the `any` type bypasses type checking and eliminates many of the benefits of static typing.

2. Type Inference: With generics, TypeScript can often infer the specific type based on the context, eliminating the need to explicitly specify the type parameter. This enables a more concise and readable code, while still benefiting from type safety. On the other hand, the `any` type requires explicit type annotations or casting to regain type information.

3. Code Maintainability: Generics help improve code maintainability by providing reusable components that maintain type consistency. It allows you to write generic functions or classes that can work with a variety of types, while still preserving type safety. The `any` type, however, can lead to less maintainable code since it sacrifices type information and may result in harder-to-track bugs.

In summary, while generics and the `any` type share some similarities in terms of flexibility and accepting multiple types, generics offer stronger type safety, better type inference, and improved code maintainability. It is generally recommended to use generics instead of the `any` type whenever possible to leverage the benefits of TypeScript's static typing.