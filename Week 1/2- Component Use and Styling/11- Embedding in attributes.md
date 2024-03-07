# Embedding in attributes

In React, you can embed JSX expressions within attributes to dynamically set values based on JavaScript logic. This is commonly used when working with attributes like `src` in HTML tags, especially for rendering images. Here's a summary with a code example:

```jsx
import React from 'react';
import avatarImage from './avatar.png'; // Importing the image

// Logo component
const Logo = (props) => {
  const userPic = <img src={props.imageSrc} alt="User Avatar" />; // JSX expression in the src attribute
  return userPic;
};

// App component
const App = () => {
  // Function to get the image source dynamically
  const getImageSrc = () => {
    // Logic to determine the image source dynamically (could be based on user data, state, etc.)
    return avatarImage; // In this example, using the imported image
  };

  return (
    <div>
      <h1>Hello World</h1>
      {/* Embedding the JSX expression in the src attribute */}
      <Logo imageSrc={getImageSrc()} />
    </div>
  );
};

export default App;
```

In this example:

1. The `Logo` component takes a `props` object, and within its JSX, an expression is embedded in the `src` attribute of the `img` tag. The value for the `src` attribute is passed as a prop to the `Logo` component.

2. The `App` component imports the image (`avatar.png`) and defines a function (`getImageSrc`) that determines the image source dynamically. This function is called when rendering the `Logo` component, demonstrating the ability to embed JSX expressions in attributes.

This approach allows you to set attribute values dynamically based on conditions, variables, or any other JavaScript logic, providing flexibility in rendering content within your React components.