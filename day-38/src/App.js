// import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import ParentToolbar from './components/ParentToolbar';
import Signup from './components/Signup';
import Toolbar from './components/Toolbar';
import ToolBarNext from './components/ToolbarNext';

function App() {
  return (
    <div className="App">
      <h1>Day-38</h1>
      <br></br>
      <Button/>
      <Toolbar />
      <ToolBarNext />
      <ParentToolbar />
      <Signup />
    </div>
  );
}

export default App;
