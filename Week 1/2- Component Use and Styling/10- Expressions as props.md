# Expressions as props

In React, you can pass expressions as props to components, allowing for dynamic behavior based on the evaluated expressions. Here's an example to illustrate how expressions can be used as props in React:

```jsx
import React from 'react';

// Child component that receives and uses props
const Greeting = ({ message }) => {
  return <p>{message}</p>;
};

// Parent component where expressions are used as props
const App = () => {
  const isMorning = new Date().getHours() < 12;
  const user = { name: 'John', isLoggedIn: true };

  return (
    <div>
      {/* Using a ternary expression as a prop */}
      <Greeting message={isMorning ? 'Good Morning!' : 'Hello!'} />

      {/* Using an inline function as a prop */}
      <Greeting message={() => user.isLoggedIn ? `Welcome back, ${user.name}!` : 'Please log in'} />

      {/* Using a variable as a prop */}
      {user.isLoggedIn && <Greeting message={`Hello, ${user.name}`} />}
    </div>
  );
};

export default App;
```

In this example:

1. The `Greeting` component receives a `message` prop.
2. In the `App` component:
   - A ternary expression is used as a prop to conditionally greet the user based on whether it's morning or not.
   - An inline function is used as a prop to conditionally greet the user based on their login status.
   - A variable (`user.isLoggedIn`) is used as a prop to conditionally greet the user if they are logged in.

These examples showcase different ways to use expressions as props in React. Expressions can include ternary operators, inline functions, variables, or any other JavaScript expressions that evaluate to a value. This flexibility allows you to pass dynamic content and behavior to your components based on changing conditions or data.