import './App.css';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <Heading firstName='Bob' />
      <Heading firstName='Any name other than Bob' />
      <Heading firstName='Jack' />
    </div>
  );
}

export default App;
