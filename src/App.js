import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import NameForm from './components/NameForm';
import ToggleMessage from './components/ToggleMessage';

function App() {
  return (
    <div className="App">
     <Counter></Counter>
     <NameForm></NameForm>
     <ToggleMessage></ToggleMessage>

    </div>
  );
}

export default App;
