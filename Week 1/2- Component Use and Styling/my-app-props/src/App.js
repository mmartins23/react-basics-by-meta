import './App.css';
import Card from './components/Card';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <Heading firstName='Bob' />
      <Heading firstName='Any name other than Bob' />
      <Heading firstName='Jack' />
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2"/>
      <Card h3="First card's h3"/>
      <Card h2="Second cards h2" h3="Second cards h3"/>
    </div>
  );
}

export default App;
