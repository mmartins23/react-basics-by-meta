# Syntax for handlers

In web development, event handling is crucial for creating interactive user experiences. In React, handling events involves syntax differences compared to traditional HTML and JavaScript. Let's summarize the key points with code examples:

**1. HTML Event Handling:**
```html
<!-- Plain HTML Button with Click Event -->
<button id="js-btn" onclick="clickHandler()">Click me</button>

<!-- JavaScript Equivalent using addEventListener -->
<script>
  const jsButton = document.getElementById('js-btn');
  jsButton.addEventListener('click', clickHandler);

  function clickHandler() {
    console.log('Button Clicked!');
  }
</script>
```

In plain HTML, events are typically handled using the `on` attribute, like `onclick`. However, it's recommended to use JavaScript for more control.

**2. React Event Handling:**
```jsx
import React from 'react';

// React Component with Click Event
function ButtonComponent() {
  const clickHandler = () => {
    console.log('Button Clicked!');
  };

  return (
    <button onClick={clickHandler}>Click me</button>
  );
}

export default ButtonComponent;
```

In React, you use JSX event attributes with camelCase naming, such as `onClick`. Note that you pass a reference to the event handling function without invoking it.

**3. Passing Functions as Props in React:**
```jsx
import React from 'react';

// Parent Component (App)
function App() {
  const handleClick = () => {
    console.log('Button Clicked in App Component!');
  };

  return (
    <div>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

// Child Component
function ChildComponent(props) {
  return (
    <button onClick={props.onClick}>Click me</button>
  );
}

export default App;
```

In React, you can pass function declarations as props to child components, allowing for effective communication between components.

Understanding these syntax differences is crucial for effective event handling in React, promoting a declarative approach and maintaining a component-based structure.