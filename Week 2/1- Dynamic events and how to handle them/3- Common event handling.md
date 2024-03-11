# Common event handling

**Introduction:**
This tutorial demonstrates handling various events in React using components. A new component, `Btn`, is created in the `SRC` folder, initially containing an empty function. The goal is to handle click and mouse-over events on a button rendered in the app.

**Setting Up Btn Component:**
1. Created a `Btn` component with a button reading "Click Me."
2. Set up the `onclick` synthetic event in the return statement, calling a function named `clickHandler` whenever the button is clicked.

```jsx
// Btn.js
import React from 'react';

const Btn = () => {
    const clickHandler = () => {
        console.log('Clicked');
    };

    return (
        <button onClick={clickHandler}>Click Me</button>
    );
};

export default Btn;
```

**Handling Click Event:**
1. Defined the `clickHandler` function to output 'Clicked' to the console on every click.
2. Demonstrated the functionality in the browser, showing the console output for each button click.

**Handling Mouse-Over Event:**
1. Copied the entire code, commented it out using a keyboard shortcut (`Control K, C`), and pasted it.
2. Replaced the `onclick` attribute with `onmouseover` and updated the event handling function to read 'Mouse Over.'
3. Saved changes and observed the console showing 'Mouse Over' when hovering over the button.

```jsx
// Btn.js (Updated)
import React from 'react';

const Btn = () => {
    const clickHandler = () => {
        console.log('Clicked');
    };

    const mouseOverHandler = () => {
        console.log('Mouse Over');
    };

    return (
        <button onClick={clickHandler} onMouseOver={mouseOverHandler}>Click Me</button>
    );
};

export default Btn;
```

**Conclusion:**
Developers can easily handle events in React using JSX attributes like `onclick` or `onmouseover`. This tutorial showcased the creation of a simple button component and the handling of click and mouse-over events. Understanding event handling is crucial for building interactive and responsive React applications.