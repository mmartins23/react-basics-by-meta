# Event handling and embedded expressions

Here's a summary of the different ways to handle events in React with code examples:

1. **Handling events using inline anonymous ES5 functions:**
```jsx
<button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button>
```

2. **Handling events using inline anonymous ES6 functions (arrow functions):**
```jsx
<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>
```

3. **Handling events using separate function declarations:**
```jsx
function App() {
    function thirdExample() {
        console.log('third example');
    };
    return (
        <div className="thirdExample">
            <button onClick={thirdExample}>
                using a separate function declaration
            </button>
        </div>
    );
};
export default App;
```

4. **Handling events using separate function expressions:**
```jsx
function App() {
    const fourthExample = () => console.log('fourth example');

    return (
        <div className="fourthExample">
            <button onClick={fourthExample}>
                using a separate function expression
            </button>
        </div>
    );
};
export default App;
```

These examples illustrate different approaches to handling events in React, allowing you to choose the syntax that best fits your use case or coding style preference.