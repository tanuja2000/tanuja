import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my project.
        </p>
        <a
          className="App-link"
          href="https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore our project
        </a>
      </header>
    </div>
  );
}

export default App;
