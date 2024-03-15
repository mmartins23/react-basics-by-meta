# Conditional components

Conditional rendering in React allows developers to dynamically change the components displayed on a webpage based on certain conditions. This is commonly used in scenarios such as displaying different UI elements depending on whether a user is logged in or not.

### Example:

Suppose we have two child components: `LoginButton` and `LogoutButton`, each displaying a corresponding button. We want to create a parent component called `LogInOutButton` that conditionally renders one of these child components based on the value of a prop called `isLoggedIn`.

```jsx
function LogInOutButton(props) {
    const isLoggedIn = props.isLoggedIn;
    
    // Conditional rendering based on the isLoggedIn prop
    if (isLoggedIn) {
        return <LogoutButton />;
    } else {
        return <LoginButton />;
    }
}
```

In this example, if `isLoggedIn` is true, the `LogoutButton` component is rendered, indicating that the user is logged in. Otherwise, the `LoginButton` component is rendered, indicating that the user is logged out.

### Usage:

When using the `LogInOutButton` parent component in your application, you can pass the `isLoggedIn` prop to determine which button to display.

```jsx
// Example usage of LogInOutButton component
<LogInOutButton isLoggedIn={false} />
```

Here, we pass `isLoggedIn={false}` to indicate that the user is not logged in, so the `LoginButton` component will be rendered.

### Summary:

- Conditional rendering in React allows components to be displayed or hidden based on certain conditions.
- Conditions can be based on props passed to the component or component state.
- Developers often use conditional rendering to create dynamic and interactive user interfaces in React applications.

By leveraging conditional rendering, developers can create more personalized and intuitive user experiences in their React applications.