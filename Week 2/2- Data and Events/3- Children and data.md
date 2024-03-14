# Children and data

In ReactJS, data flow follows a unidirectional path, ensuring that data moves from parent components to child components, allowing for efficient management and transmission of changes throughout the component hierarchy.

Key Points:

1. **Importance of One-Way Data Flow**: React emphasizes one-way data flow, where data travels from parent components to child components, facilitating predictable and manageable data flow. This ensures that changes propagate systematically through the component hierarchy.

2. **Props**: Props represent data passed from parent components to child components and are immutable. They enable the creation of reusable and modular components by providing a way to customize component behavior and appearance.

3. **Role of Props**: Props data is received from parent components and consumed by child components. Child components cannot mutate or change their props; they can only read them and re-render accordingly.

Practical Example:

Consider a React application with two components: `App` and `Child`. The `App` component passes a message prop containing the current date to the `Child` component. The `Child` component renders the message prop in an `<h1>` element.

```jsx
// app.js
import React from 'react';
import Child from './child';

function App() {
    const currentDate = new Date().toLocaleString();
    
    return (
        <div>
            <Child message={currentDate} />
        </div>
    );
}

export default App;

// child.js
import React from 'react';

function Child(props) {
    return (
        <div>
            <h1>{props.message}</h1>
        </div>
    );
}

export default Child;
```

In this example, the data flows from the `App` component to the `Child` component via props, demonstrating the one-way data flow in React. The `Child` component receives the `message` prop and renders it within an `<h1>` element, displaying the current date and time.