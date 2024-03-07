# Embedded JSX expressions

In this lesson, you delved into the usage of JSX, a syntax extension of JavaScript commonly employed in React for building dynamic and expressive user interfaces. The focus was on understanding embedded expressions, a powerful feature of JSX.

**Key Points:**

1. **JSX Overview:**
   - JSX is a syntax extension in JavaScript, enabling the incorporation of HTML-like code directly into React components.
   - JSX simplifies the process of creating React elements by closely resembling HTML syntax.

2. **Basic JSX Example:**
   - Demonstrated a simple JSX example where a paragraph element containing the text "hello world" is assigned to a constant variable named `Result`.
   - JSX automatically translates into React elements that can be inserted into the webpage.

   ```jsx
   // Basic JSX example
   const Result = <p>Hello world</p>;
   ```

3. **Embedded Expressions in JSX:**
   - Introduced the concept of embedded expressions in JSX, allowing the insertion of JavaScript variables or function outputs into HTML content.

   ```jsx
   // Embedded expressions in JSX
   const firstName = "John";
   const lastName = "Doe";
   const formatName = () => `${firstName} ${lastName}`;

   const greeting = <p>Hello, {formatName()}!</p>;
   ```

4. **Embedded Expressions in Attributes:**
   - Illustrated how embedded expressions can be utilized for HTML attributes in JSX, streamlining the incorporation of dynamic values.

   ```jsx
   // Embedded expressions for HTML attributes in JSX
   const imageURL = "path/to/profile-pic.jpg";
   const profilePic = <img src={imageURL} alt="Profile Picture" />;
   ```

   - Note: JSX automatically adds double-quotes around the attribute values.

**Code Example:**

```jsx
// JSX example with embedded expressions
import React from 'react';

const firstName = "John";
const lastName = "Doe";
const formatName = () => `${firstName} ${lastName}`;

const imageURL = "path/to/profile-pic.jpg";

function EmbeddedJSXExample() {
  return (
    <div>
      {/* Embedded expression in content */}
      <p>Hello, {formatName()}!</p>

      {/* Embedded expression in attribute */}
      <img src={imageURL} alt="Profile Picture" />
    </div>
  );
}

export default EmbeddedJSXExample;
```

This example highlights the versatility of JSX, especially its ability to seamlessly integrate JavaScript variables and functions into HTML content, making dynamic rendering in React components more concise and expressive.