# Practical styling

In this lesson, you explored practical styling techniques in React, focusing on incorporating CSS rules into a component using internal styling. The three common methods of styling (inline, internal, and external) were briefly reviewed.

Key Points:

1. **Styling Techniques:**
   - Recap of three styling techniques: inline (style attribute), internal (style element), and external (linking to CSS file).

2. **Internal Styling in React Components:**
   - Demonstrated how to extract CSS rules from an external file (`index.css`) and add them as internal styles to a specific component (e.g., `Sidebar`).
   - Specifically, the focus was on styling the `Sidebar` component while leaving other components unaffected.

3. **Process Overview:**
   - Cut the relevant CSS code from `index.css` that pertains to the `Sidebar` styling.
   - Pasted the cut CSS code into the `sidebar.js` file, making adjustments to convert it into a JavaScript object.

4. **Conversion to JavaScript Object:**
   - Declared a `sidebarStyle` constant variable to store the CSS rules.
   - Converted CSS property names from hyphenated format to camelCase.
   - Enclosed property values in double quotes to represent strings.
   - Replaced semicolons with commas in the JavaScript object.

5. **Applying Internal Styles in JSX:**
   - Added a `style` attribute to the JSX element in the `Sidebar` component's return statement.
   - Used the `sidebarStyle` JavaScript object as a JSX expression to apply the internal styling.

6. **Rendering and Verification:**
   - Saved the changes to see the `Sidebar` component with the internal styles applied in the browser.

In essence, you learned how to efficiently integrate external CSS rules into a React component, optimizing internal styling for enhanced modularity and component-specific design. This approach facilitates a clean separation of concerns and simplifies maintenance.

**Code Example:**

```jsx
// Example of a React component with internal styling
import React from 'react';

// Internal styling for Sidebar component
const sidebarStyle = {
  background: "lightblue",
  padding: "10px",
  borderRadius: "5px",
  // Add other CSS properties as needed
};

function Sidebar() {
  return (
    <aside style={sidebarStyle}>
      {/* Sidebar content goes here */}
    </aside>
  );
}

export default Sidebar;
```

This example illustrates how internal styling can be seamlessly applied to a React component, enhancing the overall aesthetics and organization of the code.