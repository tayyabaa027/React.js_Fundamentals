# React.js Fundamentals 🚀

This repository contains my notes and practice code for learning the fundamentals of React.js.

---

## 📖 What is React?

React is a **JavaScript library** developed by Meta for building fast, interactive, and reusable user interfaces using components.

---

## 📦 Import

`import` is used to bring functions, variables, classes, or components from one file into another so they can be used.

### Example

```javascript
import App from "./App";
import { add } from "./math";
```

---

## 📤 Export

`export` is used to make functions, variables, or components available for use in other files.

### Named Export

Used to export multiple values from a file.

```javascript
export const name = "React";
export function greet() {}
```

Import:

```javascript
import { name, greet } from "./file";
```

### Default Export

Used to export one main value from a file.

```javascript
function App() {}

export default App;
```

Import:

```javascript
import App from "./file";
```

---

## ⚛️ JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript. React converts JSX into JavaScript (`React.createElement()`) before it is executed.

### Example

```jsx
const element = <h1>Hello World</h1>;
```

---

## 🌐 DOM (Document Object Model)

The DOM is a tree-like representation of an HTML document created by the browser. JavaScript uses the DOM to access and manipulate web page elements.

Example:

```javascript
document.getElementById("title");
```

---

## ⚡ Virtual DOM

The Virtual DOM is a lightweight copy of the Real DOM maintained by React.

When the application state changes:

1. React creates a new Virtual DOM.
2. React compares it with the previous Virtual DOM (Diffing).
3. React identifies the changed elements.
4. Only the changed parts are updated in the Real DOM.

This makes React applications faster and more efficient than updating the entire DOM.

---

## 🎯 Why React?

- Component-Based Architecture
- Reusable Components
- Virtual DOM for better performance
- Declarative UI
- Fast Rendering
- Strong Community Support

---