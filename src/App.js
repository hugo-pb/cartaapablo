import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
function App() {
  return (
    <div className="App">
      <h1>Juan Pablino Perez</h1>
      <header className="App-header">
        <p> Querido pablo,</p>
        <img src={logo} className="App-logo" alt="logo" />
       </header>
       <Intro />
    </div>
  );
}

export default App;
