import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import TimerDashboard from './timercomponents/TimerDashBoard';

function App() {

  return (
    <div className="App">
      <h1>Timer App</h1>
      <hr/>
      <TimerDashboard />
      


    </div>
  );
}

export default App;
