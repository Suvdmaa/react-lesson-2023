// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FeedBackForm from './components/Feedback';
import { Link, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Test from './components/Test';
import Suvd from './components/about/Suvd';
import Shur from './components/about/Shur';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className='App'>
      <h1>Day - 43 React Router</h1>
      <div id="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/feedback"}>FeedbackForm</Link>
        <Link to={"/about/test"}>Test</Link>

      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/*" element={<About />} >
          <Route path="test" element={<Test />} />
          <Route path="suvd" element={<Suvd />} />
          <Route path="shur" element={<Shur />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<FeedBackForm />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App;
