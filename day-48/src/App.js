import Input from './components/Input';
import './App.css';
import { useState } from 'react';
import Anime from './components/Anime';
import Button from './components/Button';
import TopAnime from './components/TopAnime';

function App() {
  const [text, setText] = useState('')
  function handleChange(e){
    setText(e.target.value)
  }
  return (
    <div className="App">
      <Input onChange={handleChange} value={text} label='First Input'/>
      <Input onChange={handleChange} value={text} label="Second Input"/>
      <Anime/>
      <Button/>
      <TopAnime/>
    </div>
  );
}

export default App;
