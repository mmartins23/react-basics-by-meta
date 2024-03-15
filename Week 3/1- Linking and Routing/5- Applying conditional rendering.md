# Applying conditional rendering

Conditional rendering in React allows developers to selectively render components based on certain conditions. This flexibility enables the creation of dynamic and responsive user interfaces. Let's explore how to apply conditional rendering in React with code examples.

### Using If-Else Statements:
```jsx
function CurrentMessage() {
    const day = new Date().getDay();

    // Conditional rendering using if-else statements
    if (day >= 1 && day <= 5) {
        return <Workdays />;
    } else {
        return <Weekends />;
    }
}
```
In this example, the `CurrentMessage` component renders either the `Workdays` or `Weekends` component based on the current day obtained from `new Date().getDay()`.

### Using Props for Conditional Rendering:
```jsx
function CurrentMessage({ day }) {
    // Conditional rendering based on props
    if (day >= 1 && day <= 5) {
        return <Workdays />;
    } else {
        return <Weekends />;
    }
}
```
Here, the `CurrentMessage` component receives the `day` prop, and the rendering logic is based on the value of this prop.

### Using Element Variables:
```jsx
function CurrentMessage({ day }) {
    const weekday = day >= 1 && day <= 5;
    const weekend = day === 6 || day === 7;
    let message;

    // Conditional rendering using element variables
    if (weekday) {
        message = <Workdays />;
    } else if (weekend) {
        message = <Weekends />;
    } else {
        message = <ErrorComponent />;
    }

    return (
        <div>
            {message}
        </div>
    );
}
```
In this approach, element variables are used to store the components to render based on conditions, providing a cleaner way to manage rendering logic.

### Using Logical AND Operator:
```jsx
function LogicalAndExample() {
    const val = prompt('Anything but a 0');

    return (
        <div>
            <h1>Please don't type in a zero</h1>
            {val && <h2>Yay, no 0 was typed in!</h2>}
        </div>
    );
}
```
Here, the logical AND operator (`&&`) is used for conditional rendering. If `val` is truthy (not equal to zero), the `<h2>` element is rendered.

### Summary:
- Conditional rendering in React allows components to render selectively based on conditions.
- If-else statements, props, element variables, and logical operators like && can be used for conditional rendering.
- Developers can choose the appropriate approach based on the complexity and requirements of their application.

By mastering conditional rendering techniques, developers can build more dynamic and interactive React applications tailored to their users' needs.