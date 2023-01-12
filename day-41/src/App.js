import './App.css';
import { Button, Input } from './components/App';
import Counter from './components/Counter';
import Exercises from './components/Exercises';
import List from './components/SpreadArray';
import UpdateArrays from './components/UpdateArray';
import UpdatingObjects from './components/UpdatingObjects';

function App() {
  // const [counter, setCounter] = useState(0)

  return (
    <div className="App">
     {/* <Button/>
     <Counter />

     <UpdateArrays />
     <List />

     <UpdatingObjects /> */}

     <Exercises />
    </div>
  );
}

export default App;
