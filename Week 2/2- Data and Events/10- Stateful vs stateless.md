# Stateful vs. stateless

In React, components can be categorized into two main types: stateful and stateless components. Understanding the differences between these two types is crucial for designing efficient and maintainable React applications.

### Stateful Components:
- Stateful components, as the name suggests, hold state as internal data.
- The state of these components changes based on the application's logic or user interactions.
- Stateful components are typically used when a component needs to maintain its own state to function correctly.

```jsx
import React, { useState } from 'react';

const App = () => {
  // Define state using useState hook
  const [message, setMessage] = useState('Hello');

  // Stateful component
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage('Goodbye')}>
        Change Message
      </button>
    </div>
  );
};

export default App;
```

### Stateless Components:
- Stateless components, on the other hand, do not store any state internally.
- These components receive data (including state) through props and render it on the screen.
- Stateless components are suitable for rendering UI elements based on the data received from their parent components.

```jsx
import React from 'react';

// Stateless component
const ChildComponent = ({ message }) => {
  return <h1>{message}</h1>;
};

export default ChildComponent;
```

### Choosing Between Stateful and Stateless Components:
- Use stateless components when the component does not need to maintain its own state and relies entirely on props for data.
- Use stateful components when the component needs to maintain its own state, such as handling user input or managing complex UI interactions.

```jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const App = () => {
  // Define state using useState hook
  const [message, setMessage] = useState('Hello');

  // Stateful component
  return (
    <div>
      {/* Pass state as prop to child component */}
      <ChildComponent message={message} />
      <button onClick={() => setMessage('Goodbye')}>
        Change Message
      </button>
    </div>
  );
};

export default App;
```

In summary, understanding when to use stateful and stateless components based on the specific needs of your application is essential for creating well-structured and efficient React code. Stateful components manage their own state, while stateless components rely on props for data rendering. Both types of components play crucial roles in building React applications, and choosing the appropriate type depends on the requirements of each component within the application.