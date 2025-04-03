import logo from './logo.svg';
import './App.css';
import Student from './components/Student';


function App() {
  return (
    <div className="App">
      <Student sname="MS Dhoni">I am from Ranchi.</Student>

      <Student sname="Virat Kohli">I am from Delhi.</Student>
    </div>
  );
}

export default App;
