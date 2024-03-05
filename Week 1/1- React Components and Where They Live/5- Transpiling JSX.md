# Transpiling JSX

In React, JSX (JavaScript XML) is a syntax extension that allows you to write HTML elements and components in a syntax that looks similar to XML or HTML. JSX code needs to be transpiled into standard JavaScript before it can be executed in the browser. This process is typically handled by tools like Babel.

Here's a step-by-step explanation of transpiling JSX in React with code examples:

Certainly! Let's continue the explanation from step 2:

1. **Create a React Component with JSX:**
   Open the `src/App.js` file and create a simple React component with JSX:

   ```jsx
   // src/App.js
   import React from 'react';

   function App() {
     return (
       <div>
         <h1>Hello, React!</h1>
       </div>
     );
   }

   export default App;
   ```

2. **Run the Development Server:**
   Start the development server to see the JSX code in action:

   ```bash
   npm start
   ```

   This will open your React app in your default web browser.

3. **View Compiled JavaScript Code:**
   While the development server is running, open your browser's developer tools and navigate to the "Sources" tab. In the "localhost" section, find the `src` folder and locate the `App.js` file. This is the compiled JavaScript code generated from your JSX.

   You'll notice that the JSX code has been transformed into standard JavaScript. Below is an example of what the compiled code might look like:

   ```javascript
   // Compiled JavaScript code
   import React from 'react';

   function App() {
     return React.createElement(
       'div',
       null,
       React.createElement('h1', null, 'Hello, React!')
     );
   }

   export default App;
   ```

   The `React.createElement` function is used to create React elements in a format that can be executed by the browser.

4. **Configure Babel (Optional):**
   While Create React App handles the JSX transpilation for you, in more advanced setups or custom configurations, you might need to configure Babel directly. Babel plugins like `@babel/preset-react` are commonly used for JSX transpilation.

   Example `.babelrc` file:

   ```json
   {
     "presets": ["@babel/preset-react"]
   }
   ```

In summary, JSX in React needs to be transpiled into standard JavaScript to be understood by browsers. This transpilation process is often handled by tools like Babel, and you can inspect the compiled code to see how JSX is transformed into standard `React.createElement` calls.