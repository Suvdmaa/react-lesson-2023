import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Product from './product';
// import 'font-awesome/css/font-awesome.min.css'
// import Product1 from './Product1';
// import Product2 from './Product2';
// import Product3 from './Product3'
// import Product4 from './Product4';

// import ProductFunc from './ProductFunc';
// import ProductFunc2 from './ProductFunc2';
// import ProductFunc3 from './ProductFunc3';
// import ProductFunc4 from './ProductFunc4';

import products from './Seed';
import ProductFunc from './ProductFunc';
import Product from "./product"



function App() {
  const productList = products.map((product) =>{
    return <ProductFunc 
    title={product.title} 
    id={product.id} 
    number={product.number} 
    description={product.description} 
    url={product.votes} 
    votes={product.votes} 
    submitterAvatarUrl={product.submitterAvatarUrl} 
    productImageUrl={product.productImageUrl}
    stars={product.stars}/>
  })
  // const productList2 = products.map((product)=>{
  //   return <Product
  //   title={product.title} 
  //   id={product.id} 
  //   number={product.number} 
  //   description={product.description} 
  //   url={product.votes} 
  //   votes={product.votes} 
  //   submitterAvatarUrl={product.submitterAvatarUrl} 
  //   productImageUrl={product.productImageUrl}
  //   stars={product.stars}/>
  // })
  
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
        {/* <ProductFunc />
        <ProductFunc2 />
        <ProductFunc3 />
        <ProductFunc4 /> */}

        {productList}
        {/* {productList2} */}
      </div>
    </div>
  );
}


export default App;
