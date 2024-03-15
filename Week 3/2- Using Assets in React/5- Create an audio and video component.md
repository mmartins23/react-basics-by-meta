# Create an audio / video component

In this video, the process of installing and using the React Player package to render a media player in React apps is demonstrated, along with applying common settings like automatic playback and starting volume. Here's a summary with the code example explained:

1. **Installation and Import**:
   - The first step is to install the React Player module using npm:
     ```
     npm install react-player
     ```
   - Once installed, import the React Player module into the component where you want to use it:
     ```javascript
     import ReactPlayer from 'react-player';
     ```

2. **Rendering the React Player Component**:
   - Use the imported React Player component within your React component's JSX code:
     ```javascript
     function App() {
       return (
         <div>
           <h1>React Player Example</h1>
           <ReactPlayer
             url={videoURL}
             playing={false}
             volume={0.5}
           />
         </div>
       );
     }
     ```

3. **Setting Up Video URL**:
   - Assign the URL of the video to the `url` attribute of the React Player component:
     ```javascript
     const videoURL = 'https://www.example.com/video.mp4';
     ```

4. **Customizing Settings**:
   - Customize the player settings by adding attributes to the React Player component:
     - `playing={false}`: Prevents the video from playing automatically when the page loads.
     - `volume={0.5}`: Sets the starting volume at 50% of the maximum.
     - For more settings, refer to the React Player documentation.

5. **Verification**:
   - Save the changes and verify that the React Player component works as expected in the browser.
   - Interact with the player, use built-in controls, and ensure that the video starts at the desired volume level.

6. **Further Resources**:
   - Visit the project's GitHub repository at github.com/CookPete/react-player for additional information and documentation.
   - Explore the live demo on the project's website for experimenting with various video sources and settings.

By following these steps, React developers can easily incorporate media players into their applications using the React Player package, along with customizing settings according to their requirements.