# Single view conditional updates

Conditional rendering in React allows developers to display different content based on certain conditions. This can be achieved using if-else statements or ternary operators within the JSX code.

### Example:

Suppose we want to build a simple React app that displays a message for a given work day, and if it's morning time, it asks the user if they've had their breakfast yet.

```jsx
import React from 'react';

function App() {
    // Get the current time
    const time = new Date();
    // Get the day of the week
    const day = time.toLocaleString('en-US', { weekday: 'long' }).toLowerCase();
    // Check if it's morning time (6 AM - 12 PM)
    const morning = time.getHours() >= 6 && time.getHours() <= 12;
    // Variable to store the message
    let dayMessage;

    // Generate dynamic message based on the day
    if (day === 'monday') {
        dayMessage = 'Happy Monday';
    } else if (day === 'tuesday') {
        dayMessage = 'Tuesday, 4 days to go';
    }
    // Add more conditions for other days...

    // Default message for other days
    else {
        dayMessage = 'Stay calm and keep having fun';
    }

    return (
        <div>
            <h1>{dayMessage}</h1>
            {/* Conditional rendering for morning message */}
            {morning ? <h2>Have you had breakfast yet?</h2> : null}
        </div>
    );
}

export default App;
```

In this example:
- We get the current time and day of the week using JavaScript's `Date` object.
- Based on the day, we assign a specific message to the `dayMessage` variable using if-else statements.
- We use ternary operator `{morning ? <h2>Have you had breakfast yet?</h2> : null}` to conditionally render the morning message.

### Summary:

- Conditional rendering in React allows developers to display different content based on certain conditions.
- This can be achieved using if-else statements or ternary operators within the JSX code.
- By leveraging conditional rendering, developers can create dynamic and personalized user interfaces in React applications.