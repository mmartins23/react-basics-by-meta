# Ternary operators and functions in JSX

Certainly! In React, ternary operators and functions can be used within JSX to conditionally render content or apply dynamic styles. Below are examples demonstrating the use of ternary operators and functions in JSX.

### Ternary Operators in JSX:

```jsx
import React from 'react';

const TernaryOperatorExample = ({ isLoggedIn }) => {
  return (
    <div>
      <h2>{isLoggedIn ? 'Welcome User!' : 'Please Log In'}</h2>
      {isLoggedIn ? (
        <p>You are currently logged in.</p>
      ) : (
        <p>Please log in to access your account.</p>
      )}
    </div>
  );
};

export default TernaryOperatorExample;
```

In this example, the ternary operator (`condition ? trueValue : falseValue`) is used to conditionally render different messages based on the `isLoggedIn` prop.

### Functions in JSX:

```jsx
import React from 'react';

const FunctionInJSXExample = ({ userName }) => {
  // Example function to format the user name
  const formatUserName = (name) => {
    return name.toUpperCase();
  };

  return (
    <div>
      <h2>Hello, {formatUserName(userName)}</h2>
      <p>This is an example of using a function in JSX.</p>
    </div>
  );
};

export default FunctionInJSXExample;
```

Here, a function (`formatUserName`) is defined to format the user name, and the result of this function is directly rendered within the JSX.

### Combining Ternary Operators and Functions:

```jsx
import React from 'react';

const CombinedExample = ({ isLoggedIn, userName }) => {
  // Example function to format the user name
  const formatUserName = (name) => {
    return name.toUpperCase();
  };

  return (
    <div>
      <h2>{isLoggedIn ? `Welcome, ${formatUserName(userName)}!` : 'Please Log In'}</h2>
      {isLoggedIn ? (
        <p>You are currently logged in.</p>
      ) : (
        <p>Please log in to access your account.</p>
      )}
    </div>
  );
};

export default CombinedExample;
```

This example combines both ternary operators and functions to conditionally render a welcome message with a formatted user name based on the `isLoggedIn` prop.

These examples demonstrate how to leverage ternary operators and functions to make your JSX dynamic and respond to different conditions or data.