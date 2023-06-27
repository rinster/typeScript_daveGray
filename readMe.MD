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
