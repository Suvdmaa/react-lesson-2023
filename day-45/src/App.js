import './App.css';
import { Route, Routes} from 'react-router-dom'
import Accordion from './component/Accordion';
import Login from './component/Login';
import Home from './component/Home';
import Register from './component/Register';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />}/>
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </div>
  );
}

export default App;
