# The navbar

In this video, you learned how to use the React Router library to set up navigation in your React apps. Below is a summary along with the corresponding code example:

### Summary:
- React Router library allows for setting up navigation in React apps, giving developers more control over routing components.
- By installing `react-router-dom`, developers can create navigation systems that mimic multi-page websites within a single-page application.
- The `BrowserRouter` component from React Router is used to wrap the entire application, enabling navigation functionality.
- Routes are defined using the `Route` component from React Router, specifying the path and the component to render for each route.
- Navigation links are created using the `Link` component from React Router, allowing users to navigate between different routes without page reloads.

### Code Example:
```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';

ReactDOM.render(
  <BrowserRouter> {/* Wrap the entire app with BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// App.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'; // Import Link and Route
import Homepage from './Homepage';
import Aboutme from './Aboutme';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Homepage</Link></li> {/* Replace anchor tags with Link */}
          <li><Link to="/about-me">About Me</Link></li> {/* Replace anchor tags with Link */}
        </ul>
      </nav>
      <Routes> {/* Group routes using Routes component */}
        <Route path="/" element={<Homepage />} /> {/* Define routes using Route component */}
        <Route path="/about-me" element={<Aboutme />} /> {/* Define routes using Route component */}
      </Routes>
    </div>
  );
}

export default App;
```

### Explanation:
1. Install `react-router-dom` library using `npm i react-router-dom@6`.
2. Wrap the entire application with `<BrowserRouter>` in the `index.js` file.
3. Define routes using `<Route>` component in the `App.js` file, specifying the path and the component to render.
4. Replace anchor tags with `<Link>` component to create navigation links.
5. Group routes using `<Routes>` component in the `App.js` file.
6. Clicking on navigation links will now render the corresponding component without page reloads.

By following these steps, you can efficiently set up navigation in your React apps using React Router.