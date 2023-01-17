
import './App.css';
import Accordion from './component/Accordion';
import {Link, Route, Routes} from "react-router-dom"
import Index from './component/Index';
import Home from './component/HomePage';
import About from './component/AboutPage';
import Movies from './component/Movies';
import Movie from './component/Movie';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Index/>}/>
        <Route path="/accordion" element={<Accordion />}></Route>
        <Route path={"/home"} element={<Home/>}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={'/movies'} element={<Movies/>} ></Route>
        <Route path={"/movie/:id"} element={<Movie />}></Route>
      </Routes>
 
    </div>
  );
}

export default App;
