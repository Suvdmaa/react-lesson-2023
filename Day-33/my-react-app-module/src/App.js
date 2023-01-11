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
import { useState } from "react";


// create also changing function for productList variable in App component
// initialize productList state with products seed in  App component
// change product components 


function App() {
  // 1. create react state called "productList" variable in App component
  const [productList, setProductList] = useState(products)


  function HandleProductUpVote(productId){
    // console.log("upvoted", productId)
    // const foundProduct = products.filter(product =>{
    //   if(product.id == productId){
    //     return product
    //   }
    // })
    // console.log(foundProduct[0].votes)
    // foundProduct[0].votes = foundProduct[0].votes + 1
    // console.log(foundProduct[0].votes)

    // change votes in product array 

    // products.map(product => {
    //   if (product.id == productId){
    //     return Object.assign({}, product,{
    //       votes: product.votes + 1
    //     })
    //   }
    //   else {
    //     return product;
    //   }
    // })
    // console.log("1",products)
    const newProducts = productList.map(product =>{
      if(product.id == productId){
        return Object.assign({}, product,{
          votes: product.votes + 1
        })
      } else {
        return product
      }
    })
    console.log(newProducts)

    setProductList(newProducts)

  }


  const productList1 = products.map((product) =>{
    return <ProductFunc 
    title={product.title} 
    id={product.id} 
    number={product.number} 
    description={product.description} 
    url={product.votes} 
    votes={product.votes} 
    submitterAvatarUrl={product.submitterAvatarUrl} 
    productImageUrl={product.productImageUrl}
    onVote={HandleProductUpVote}
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

        {productList1}
        {/* {productList2} */}
      </div>
    </div>
  );
}


export default App;
