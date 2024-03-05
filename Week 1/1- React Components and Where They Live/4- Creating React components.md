# Creating Functional Components in React

In this tutorial, we explored the process of creating functional components in React, starting from a clean slate. The steps involved the initialization of a new React app, the creation of a basic component named `app`, and the introduction of another component named `header`. Below is a concise summary with code examples:

1. **Initializing a New React App:**
   - Executed the command `npm init React-app .` to create a new React app in the current folder.

   ```bash
   # Command to initialize a new React app
   npm init React-app .
   ```

2. **Building a Clean Start:**
   - Emphasized the importance of focusing on the `src` folder in VS Code for component development.
   - Removed existing code inside the `app.js` file to start with a clean slate.

   ```jsx
   // app.js
   import React from 'react';

   function App() {
     // Cleaned up content for a fresh start
   }

   export default App;
   ```

3. **Creating the App Component:**
   - Declared a simple `app` function component and exported it as the default module.
   - Resulted in a blank page when the app was saved and viewed.

   ```jsx
   // app.js
   import React from 'react';

   function App() {
     return (
       // Blank content for a clean start
     );
   }

   export default App;
   ```

4. **Introducing the Header Component:**
   - Created a new function component named `header` within the same `app.js` file.
   - Returned an H1 JSX element with the text "Hello World."

   ```jsx
   // app.js
   import React from 'react';

   function App() {
     return (
       <div>
         <Header />
       </div>
     );
   }

   function Header() {
     return <h1>Hello World</h1>;
   }

   export default App;
   ```

5. **Rendering the Header Component:**
   - Modified the `app` function to render the `Header` component inside JSX.

   ```jsx
   // app.js
   import React from 'react';

   function App() {
     return (
       <div>
         <Header />
       </div>
     );
   }

   function Header() {
     return <h1>Hello World</h1>;
   }

   export default App;
   ```

6. **Isolating and Reusing the Header Component:**
   - Highlighted the need to place the `Header` component in its own file for isolation and reusability.

In summary, this video provided hands-on guidance on creating functional components in React, resulting in an app with a simple `app` component calling another `header` component. Further steps involve isolating components into their own files for enhanced organization and reusability.