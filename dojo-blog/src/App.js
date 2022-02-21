import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the internet.';
  const likes = 50;
  const link = "http://google.es";
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
