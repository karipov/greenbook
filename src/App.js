import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>ugh</h1>
        <p>
          {6*6}
        </p>
        <a
          className="App-link"
          href="https://www.imdb.com/title/tt6966692/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GreenBook
        </a>
      </header>
    </div>
  );
}

export default App;
