import { useContext } from "react";
import "./App.css";
import InputFocus from "./components/InputFocus";
import VideoPlayer from "./components/VideoPlayer";
// import List from "./components/List";
// import StopWatch from "./components/Stopwatch";
import { ComponentContext } from "./context/Context";

function App() {
  // const [isLarge, setIsLarge, imageSize] = useContext(ComponentContext);

  return (
    <div className="App">
      {/* <input
        type="checkbox"
        onChange={(e) => setIsLarge(e.target.checked)}
      ></input>
      <label>Use Large Images</label>
      <hr />
      <List /> */}
      <h1>Day - 58 useRef Hook</h1>
      {/* <StopWatch /> */}
      {/* <InputFocus /> */}

      <h1>Video PLayer</h1>
      <VideoPlayer />
    </div>
  );
}

export default App;
