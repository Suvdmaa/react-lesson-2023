import Input from './components/Input';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('')
  function handleChange(e){
    setText(e.target.value)
  }
  return (
    <div className="App">
      <Input onChange={handleChange} value={text} label='First Input'/>
      <Input onChange={handleChange} value={text} label="Second Input"/>
    </div>
  );
}

export default App;
