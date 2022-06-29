import './App.css';
import Content from './components/content';
import NavBar from './components/navbar';


function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
