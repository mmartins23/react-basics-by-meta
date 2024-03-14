# React state management

The tutorial discusses the use of the Context API in React for more efficient state management across multiple levels of components, along with examples of the useContext and useReducer hooks.

Here's a summary with the code example explained:

```jsx
// App.js
import React from 'react';
import MealsProvider from './MealsProvider';
import MealsList from './MealsList';

function App() {
  return (
    <MealsProvider>
      <div>
        <MealsList />
        {/* Other components */}
      </div>
    </MealsProvider>
  );
}

export default App;
```

In this code, the `App` component wraps its child components (`MealsList`, etc.) with the `MealsProvider`. This `MealsProvider` component sets up the context and provides state data to all its wrapped child components.

```jsx
// MealsProvider.js
import React, { createContext, useContext, useState } from 'react';

const MealsContext = createContext();

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState([
    'Breakfast',
    'Lunch',
    'Dinner'
  ]);

  return (
    <MealsContext.Provider value={{ meals }}>
      {children}
    </MealsContext.Provider>
  );
};

export const useMealsListContext = () => useContext(MealsContext);

export default MealsProvider;
```

The `MealsProvider` component sets up the context using `createContext()` and provides the `meals` state to its children through the `MealsContext.Provider`. The `useMealsListContext` hook allows child components to consume the context.

```jsx
// MealsList.js
import React from 'react';
import { useMealsListContext } from './MealsProvider';

const MealsList = () => {
  const { meals } = useMealsListContext();

  return (
    <div>
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}
    </div>
  );
};

export default MealsList;
```

In the `MealsList` component, it consumes the context using the `useMealsListContext` hook. It then maps over the `meals` array obtained from the context and renders each meal as an `<h2>` element.

Overall, this setup demonstrates how the Context API can be used to efficiently manage state across multiple levels of components in a React application, reducing the need for prop drilling and making state management more centralized and manageable. 

***

The `useReducer` hook in React is a powerful tool for managing state in a more complex or structured way than `useState`. It is particularly useful when dealing with state logic that involves multiple actions and transitions between different states.

Here's how `useReducer` works with an example:

```jsx
import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'PICK_UP_CUSTOMER':
      return { ...state, money: state.money + 10 };
    case 'REFUEL':
      return { ...state, money: state.money - 20 };
    default:
      return state;
  }
};

const initialState = { money: 100 };

const RideShareApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Money in Wallet: {state.money}</h1>
      <button onClick={() => dispatch({ type: 'PICK_UP_CUSTOMER' })}>
        Pick Up Customer
      </button>
      <button onClick={() => dispatch({ type: 'REFUEL' })}>
        Refuel the Tank
      </button>
    </div>
  );
};

export default RideShareApp;
```

In this example:

- We first define a `reducer` function. This function takes two parameters: the current state and an action. It then determines what changes need to be made to the state based on the action type, and returns the new state accordingly.
- We set an `initialState` object, which contains the initial state of our component.
- Inside the `RideShareApp` component, we call `useReducer`, passing in the `reducer` function and the `initialState`. This returns an array containing the current state and a dispatch function.
- We render the current state (`state.money`) in the component, along with two buttons.
- When a button is clicked, it calls the `dispatch` function with an action object containing the type of action to perform (`'PICK_UP_CUSTOMER'` or `'REFUEL'`). The reducer function then handles the action and updates the state accordingly.

Using `useReducer` allows for a more structured approach to state management, especially when dealing with complex state logic or multiple related state transitions. It centralizes state updates in a single function (`reducer`), making the code easier to understand and maintain.