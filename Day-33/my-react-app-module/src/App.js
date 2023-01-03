import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Product from './product';
// import 'font-awesome/css/font-awesome.min.css'
// import Product1 from './Product1';
// import Product2 from './Product2';
// import Product3 from './Product3'
// import Product4 from './Product4';

import ProductFunc from './ProductFunc';
import ProductFunc2 from './ProductFunc2';
import ProductFunc3 from './ProductFunc3';
import ProductFunc4 from './ProductFunc4';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <Product />

    // <div className="App">
    // <header className="App-header">
    //   <h1>Popular Product</h1>
    //   <hr></hr>
    // </header>
    // {/* <div> */}
    //   {/* <Product1/>
    //   <Product2 />
    //   <Product3 />
    //   <Product4 /> */}

    // {/* </div> */}

    // </div>



    <div className="App">
      <header className="App-header">
        <h1>Popular Product</h1>
        <hr></hr>
      </header>
      <div>
        {/* <Product1 />
        <Product2 />
        <Product3 />
        <Product4 /> */}
        <ProductFunc />
        <ProductFunc2 />
        <ProductFunc3 />
        <ProductFunc4 />
      </div>
    </div>
  );
}


export default App;
