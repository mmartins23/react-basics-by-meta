import './App.css';

function App() {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('Type a number');
    alert(`Computer Number: ${randomNum}, Your Guess: ${userInput}`)
  }

  return (
    <div className="App">
      <h1>Task: Add a button and handle a click event</h1>

      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;
