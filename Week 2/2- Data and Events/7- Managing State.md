# Managing State

Managing state in React is crucial for handling dynamic data and ensuring that components reflect the latest changes in the application. As applications grow in complexity, managing state across components becomes more challenging. 

Let's break down the scenario described in the video and provide a code example to illustrate the concepts:

1. **Scenario**: 
   - You have a small React app to monitor daily meal intake.
   - The app tracks a daily meal plan, allowing users to mark consumed meals.
   - It consists of three components: `App`, `MealsList`, and `Counter`.

2. **Problem**: 
   - The `Counter` component needs state information from the `MealsList` component.
   - Both components are siblings rendered by the `App` component, not in a parent-child relationship.

3. **Solution**:
   - Use the practice known as lifting state up.
   - Move the state from `MealsList` up to the `App` component.
   - Pass state data through props from `App` to `MealsList` and `Counter`.

```jsx
// App.js
import React, { useState } from 'react';
import MealsList from './MealsList';
import Counter from './Counter';

const App = () => {
  // State to manage meals list
  const [meals, setMeals] = useState([
    'Breakfast', 'Lunch', 'Dinner'
  ]);

  return (
    <div>
      <h1>My Daily Meal Plan</h1>
      {/* Render MealsList and Counter components */}
      <MealsList meals={meals} setMeals={setMeals} />
      <Counter mealsCount={meals.length} />
    </div>
  );
}

export default App;
```

```jsx
// MealsList.js
import React from 'react';
import MealItem from './MealItem';

const MealsList = ({ meals, setMeals }) => {
  // Handle click event to mark meal as consumed
  const handleMealClick = (index) => {
    // Create a copy of meals array and remove selected meal
    const updatedMeals = meals.filter((_, i) => i !== index);
    // Update meals state with the new array
    setMeals(updatedMeals);
  };

  return (
    <div>
      <h2>Today's Meals</h2>
      {/* Map through meals array and render MealItem component */}
      {meals.map((meal, index) => (
        <MealItem key={index} meal={meal} onClick={() => handleMealClick(index)} />
      ))}
    </div>
  );
}

export default MealsList;
```

```jsx
// Counter.js
import React from 'react';

const Counter = ({ mealsCount }) => {
  return (
    <div>
      <h2>Meals Left for Today</h2>
      <p>{mealsCount} meals remaining</p>
    </div>
  );
}

export default Counter;
```

In this example, the state (list of meals) is managed in the `App` component and passed down to its child components `MealsList` and `Counter` as props. This way, both components can access and reflect the latest state without being directly connected. 

Overall, managing state effectively in React applications is essential for maintaining data consistency and ensuring components stay synchronized with each other.