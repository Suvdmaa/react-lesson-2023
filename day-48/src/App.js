import Input from './components/Input';
import './App.css';
import { useState } from 'react';
import Anime from './components/Anime';
import Button from './components/Button';
import TopAnime from './components/TopAnime';
import Exercises from './components/Exercises';
import FindEvenOdd from './components/Find-Even-Odd';
import Pascal from './components/Pascal';
import PascalTriangle from './components/Pascal';

function App() {
  const [text, setText] = useState('')
  const [isFancy, setIsFancy] = useState(false)
  function handleChange(e){
    setText(e.target.value)
  }
  return (
    <div className="App">
      {/* <Input onChange={handleChange} value={text} label='First Input'/>
      <Input onChange={handleChange} value={text} label="Second Input"/>
      <Anime/>
      <Button/>
      <TopAnime/> */}
      {/* <Exercises/>
      <FindEvenOdd />
      <Pascal/>
      <PascalTriangle /> */}
    
    </div>
  );
}

export default App;
