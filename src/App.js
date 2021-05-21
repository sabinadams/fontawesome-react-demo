import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon={['fa', 'rocket']} />
        <br />
        <FontAwesomeIcon icon={['fa', 'home']} />
      </header>
    </div>
  );
}

export default App;
