# Basic Types of navigation

The video discusses the evolution of website navigation and how it applies to React development. It draws parallels between the establishment of design standards in web development and the standardization of airplane design after an experimental phase. The focus is on creating intuitive and user-friendly navigation interfaces, following established best practices.

### Types of Website Navigation:
1. **Horizontal Navigation Bar (Navbar)**: A common navigation element displayed horizontally at the top of a webpage.
2. **Vertical Navigation Menu (Sidebar)**: Navigation displayed vertically, typically on the side of a webpage.
3. **Menu Hiding Behind a Button (Burger Menu)**: A menu icon, often represented by three horizontal lines, that reveals navigation options when clicked.
4. **Footer Navigation Menu**: Navigation links displayed at the bottom of a webpage.

### Implementation in React:
- In React, navigation is handled differently from traditional HTML/CSS navigation.
- React apps are loaded within a single `<div>`, and navigation occurs based on changes to the virtual DOM.
- React Router library is commonly used to manage navigation in React applications.
- Instead of loading separate HTML files, React Router dynamically updates the content of the single `<div>`, giving the illusion of navigating to different pages.
- This is akin to pressing buttons in an elevator where the entire floor structure is injected into the elevator, rather than physically moving between floors.

### Example:
```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

In this example, React Router's `BrowserRouter`, `Link`, `Route`, and `Switch` components are used to create a navigation system. Different components are rendered based on the URL path, simulating page navigation without actually reloading the webpage.

By understanding the types of website navigation and how it's implemented in React, developers can create intuitive and seamless navigation experiences for users.