# Audio and video

In the video, various methods of incorporating audio and video assets into a React app are discussed, along with the process of finding and selecting suitable React packages for handling such assets.

1. **Using HTML5 Video Tag**:
   - The HTML5 video tag can be used to load a local video asset into a React app.
   - Simply declare a variable containing the path to the video file and add it as a JSX expression to the `src` attribute of the video tag.
   - Example:
     ```javascript
     const videoSource = require('./assets/videos/video.mp4');

     function App() {
       return (
         <div>
           <video controls>
             <source src={videoSource} type="video/mp4" />
           </video>
         </div>
       );
     }
     ```

2. **Embedding Third-Party Videos**:
   - For videos hosted on major platforms like social media or video-sharing platforms, you may need to follow specific instructions provided by the platform for embedding the video.
   - This may involve copying and pasting a code snippet provided by the platform.
   - Alternatively, you can create a separate React component for embedding third-party videos, allowing easy switching between different videos by passing unique IDs as props.

3. **Using Third-Party NPM Packages**:
   - Exploring the NPM package ecosystem for React video-related packages can streamline the process of adding videos to your app.
   - Searching for packages like "React video" on npmjs.org can yield various options.
   - Consider factors like frequency of updates, number of contributors, and popularity (measured by stars on GitHub) when selecting a package.
   - Example package: React Player (github.com/CookPete/react-player), which has over 6,000 stars and is actively maintained.

By understanding these methods and considerations, React developers can effectively incorporate audio and video assets into their applications, whether through native HTML5 elements, third-party embeds, or dedicated React packages.