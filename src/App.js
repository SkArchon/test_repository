import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Embedded Video Example</h1>
        <video width="600" controls>
          <source src="https://eu-west-2.graphassets.com/clyk5ugurgb5g07mm171d522b/clykfavn4mj4607l1yuxl9075" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
}

export default App;
