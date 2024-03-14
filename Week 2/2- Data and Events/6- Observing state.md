# Observing state

In React, state is utilized to manage data that may change within a component. This allows components to dynamically update and re-render based on changes in their internal state, ensuring that the user interface reflects the latest data. The `useState` hook is a powerful tool in React for defining and tracking state within functional components.

Let's explore an example demonstrating the use of the `useState` hook to observe and manipulate state:

```jsx
import React, { useState } from 'react';

// Child Component
function Heading({ message }) {
    return <h1>{message}</h1>;
}

// Parent Component
function App() {
    // Define a state variable 'word' and a function to update it 'setWord'
    const [word, setWord] = useState('Eat');

    // Function to handle state update
    const handleClick = () => {
        setWord('Drink');
    };

    return (
        <div>
            {/* Rendering Heading component with message prop */}
            <Heading message={`${word} at Little Lemon`} />

            {/* Button to trigger state update */}
            <button onClick={handleClick}>Click Here</button>
        </div>
    );
}

export default App;
```

Explanation:

1. We import `useState` hook from React to enable state management within functional components.

2. We define a child component `Heading` which receives a prop `message` and renders it as an `<h1>` element.

3. In the parent component `App`, we use `useState` to declare a state variable `word` with an initial value of `'Eat'`. We also get a function `setWord` to update the state variable.

4. Inside the `App` component, we render the `Heading` component and pass the `message` prop as a template string with the value of `word` concatenated with 'at Little Lemon'.

5. We also render a button that, when clicked, calls the `handleClick` function to update the value of `word` to `'Drink'`.

In summary, the `useState` hook enables functional components to define and manage state. By using state variables and their corresponding setter functions, components can observe and update their internal state, resulting in dynamic UI updates. This example demonstrates how state change basics in React work, including observing and manipulating state within components.