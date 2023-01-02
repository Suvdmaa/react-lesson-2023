import logo from './products/image-yellow.png';
import logo2 from './products/image-aqua.png'
import logo3 from './products/image-steel.png'
import logo4 from './products/image-rose.png'
import person from './products/images.png'
import person2 from './products/images1.png'
import person3 from './products/images2.png'
import person4 from './products/images3.png'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Product</h1>
        <hr/>
      </header>
      <div>
        <div class="flex">
          <img class="image" src={logo} />
          <div class="text-container">
            <h2><i class="fa-sharp fa-solid fa-caret-up"></i> 55</h2>
            <p className="text-color">Haught or Naught</p>
            <p>High-minded or absent-minded? You decide.</p>
            <div class="flex-div" >
              <p class="last-text">Submitted by: </p>
              <img class="person" src={person}/>
            </div>
          </div>
        </div>

        <div class="flex">
        <img class="image" src={logo2} />
          <div class="text-container">
            <h2><i class="fa-sharp fa-solid fa-caret-up"></i> 55</h2>
            <p className="text-color">Yellow Pail</p>
            <p>On-demand sand castle construction expertise.</p>
            <div class="flex-div">
              <p class="last-text">Submitted by: </p>
              <img class="person" src={person2}/>
            </div>
          </div>
        </div>

        <div class="flex">
        <img class="image" src={logo3} />
          <div class="text-container">
            <h2><i class="fa-sharp fa-solid fa-caret-up"></i> 55</h2>
            <p className="text-color">Tinfoild: Tailored tinfoil hats</p>
            <p>We already have your measurements and shipping address.</p>
            <div class="flex-div">
              <p class="last-text">Submitted by: </p>
              <img class="person" src={person3}/>
            </div>
          </div>
        </div>

        <div class="flex">
        <img class="image" src={logo4} />
          <div class="text-container">
            <h2><i class="fa-sharp fa-solid fa-caret-up"></i> 55</h2>
            <p className="text-color">Supermajority: The Fantasy Congress League</p>
            <p>Earn points when your favorite politicians pass legislation.</p>
            <div class="flex-div">
              <p class="last-text">Submitted by: </p>
              <img class="person" src={person4}/>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App;
