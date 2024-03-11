# Types of Events

In React, events allow JavaScript to interact with HTML, responding to user actions like clicks or key presses. Events can be handled using JSX event attributes, similar to HTML event attributes but camel-cased in React. Here's a summary with code examples:

```jsx
import React, { useState } from 'react';

// Example React component handling events
const EventExample = () => {
  // State to track the count of items added to the cart
  const [itemCount, setItemCount] = useState(0);

  // Event handler function for the "Add to Cart" button click
  const handleAddToCart = () => {
    // Update the count in the state
    setItemCount(itemCount + 1);
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {/* Display the count next to the shopping cart */}
      <div>Items in Cart: {itemCount}</div>
    </div>
  );
};

export default EventExample;
```

In this example:

1. The `EventExample` component uses the `useState` hook to maintain the count of items in the cart.

2. The `handleAddToCart` function is an event handler that gets triggered when the "Add to Cart" button is clicked. It updates the count using `setItemCount`.

3. The `onClick` attribute in the `button` tag is a JSX event attribute, handling the click event and calling the `handleAddToCart` function.

4. The count is dynamically displayed next to the shopping cart, reflecting the number of items added.

React supports various types of events grouped into categories like mouse events (`onClick`, `onContextMenu`, etc.), keyboard events, clipboard events, and more. While there are numerous events, beginners should focus on understanding the event handling process and the capabilities events offer in React. As you progress, you can explore specific events based on your application's needs.