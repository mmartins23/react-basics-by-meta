# Using embedded assets

In the video, three different methods of displaying images in a React app are demonstrated: using the import statement, using the require function, and providing an image URL. Let's summarize each method with an example:

1. **Using the Import Statement**:
   - First, the image file is imported using the import statement, giving it a name.
   - Then, the imported image is rendered using the image tag, specifying the source attribute with the imported image variable.
   - Example:
     ```javascript
     import rooftops from './assets/images/CentralPark.jpg';

     function App() {
       return (
         <div>
           <img src={rooftops} alt="Central Park" height="200" />
         </div>
       );
     }
     ```

2. **Using the Require Function**:
   - Similar to the first method, the image is rendered using the image tag.
   - However, instead of importing the image, it is required directly inside the source attribute.
   - Example:
     ```javascript
     function App() {
       return (
         <div>
           <img src={require('./assets/images/CentralPark.jpg')} alt="Central Park" height="200" />
         </div>
       );
     }
     ```

3. **Providing an Image URL**:
   - In this method, a variable is created to store the URL of the image hosted on the internet.
   - Then, the image is rendered using the image tag, setting the source attribute to the variable containing the image URL.
   - Example:
     ```javascript
     const randomImageUrl = "https://example.com/random-image.jpg";

     function App() {
       return (
         <div>
           <img src={randomImageUrl} alt="Random Image" />
         </div>
       );
     }
     ```

By understanding these three methods, you can effectively incorporate images into your React components, whether they are locally stored assets or images hosted online. Each method offers flexibility and can be chosen based on your specific requirements and preferences.