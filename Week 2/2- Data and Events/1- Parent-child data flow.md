# Parent-child data flow

In this video, we explored the concept of parent-child data flow in React components, emphasizing its importance in maintaining a single source of truth and avoiding code duplication. Let's break down the key points and illustrate them with a coding example:

1. **Understanding Parent-Child Relationship**: In React, components can be structured hierarchically, with parent components containing child components. This relationship allows data to flow from parent to child components through props.

2. **Creating Parent and Child Components**: We created two components: `Promo` and `PromoHeading`. The `Promo` component serves as the parent component, while `PromoHeading` is the child component that renders the promotional content.

```jsx
// Parent Component: Promo.js
import React from 'react';
import PromoHeading from './PromoHeading';

const Promo = () => {
  return (
    <div className="promo">
      <PromoHeading />
    </div>
  );
};

export default Promo;
```

```jsx
// Child Component: PromoHeading.js
import React from 'react';

const PromoHeading = () => {
  return (
    <div className="promo-heading">
      <h1>80 percent off sale</h1>
    </div>
  );
};

export default PromoHeading;
```

3. **Implementing Single Source of Truth**: To avoid repetition and ensure consistency, we established a single source of truth by creating a JavaScript object named `data` within the parent component (`Promo`). This object contains properties such as `heading` and `callToAction`.

```jsx
// Parent Component: Promo.js
const Promo = () => {
  const data = {
    heading: "99 percent off all items",
    callToAction: "Everything must go"
  };

  return (
    <div className="promo">
      <PromoHeading heading={data.heading} callToAction={data.callToAction} />
    </div>
  );
};
```

4. **Passing Data to Child Component**: We passed the data from the parent component (`Promo`) to the child component (`PromoHeading`) using props. The child component accessed the data passed from the parent and dynamically rendered it in the UI.

```jsx
// Child Component: PromoHeading.js
const PromoHeading = (props) => {
  return (
    <div className="promo-heading">
      <h1>{props.heading}</h1>
      <h2>{props.callToAction}</h2>
    </div>
  );
};
```

5. **Ensuring Dynamic Updates**: By storing data in the parent component and passing it to the child component via props, any updates made to the data in the parent component automatically reflect in the child component. This ensures a seamless and efficient data flow within the application.

In summary, by establishing a parent-child relationship and utilizing props to pass data between components, we can maintain a single source of truth, reduce code duplication, and ensure consistent UI updates across the application. This approach enhances code maintainability and facilitates efficient data flow management in React applications.