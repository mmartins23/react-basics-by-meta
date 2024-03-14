# What are hooks?

Hooks are a powerful feature introduced in React version 16.8 that allow developers to add interactivity and manage state within functional components. They provide a way to hook into React's state and lifecycle features without the need for class components.

Let's delve into an example of how to use the `useState` hook, one of the most commonly used hooks in React:

```jsx
import React, { useState } from 'react';

function ExampleComponent() {
    // Declare a state variable called showMenu and a function called setShowMenu
    const [showMenu, setShowMenu] = useState(false);

    // Function to toggle the state variable showMenu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <button onClick={toggleMenu}>Toggle Menu</button>
            {showMenu && <Menu />}
        </div>
    );
}

function Menu() {
    return (
        <div>
            <p>Menu Items...</p>
        </div>
    );
}

export default ExampleComponent;
```

Explanation:

1. We import the `useState` hook from React, which allows us to manage state within a functional component.

2. Inside the `ExampleComponent` function, we use the `useState` hook to declare a state variable `showMenu` and a function `setShowMenu` to update its value. We initialize `showMenu` with `false`.

3. We define a function `toggleMenu` that toggles the value of `showMenu` when the button is clicked.

4. In the JSX, we render a button that calls `toggleMenu` when clicked. We conditionally render the `Menu` component based on the value of `showMenu`.

5. The `Menu` component is a simple functional component that displays menu items.

Hooks like `useState` provide a clean and concise way to manage state within functional components, reducing the need for class components and making the code more readable and maintainable. Additionally, hooks allow for custom hooks to be created, enabling the extraction of reusable logic into separate functions.

In summary, hooks are a powerful feature in React that simplify state management and enable the creation of more modular and readable code in functional components.