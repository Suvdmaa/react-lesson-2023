import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
  const [date, setDate] = useState('2023.01.04')
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      {!show ? <button className="bg-warning" onClick={() => setShow(true)}>Show</button> : 
      (<div className="App">
      <Header/>
      <Main date={date} setDate={setDate} />
      <Footer/>
    </div>)}
    </div>
    
  );
}

export default App;
