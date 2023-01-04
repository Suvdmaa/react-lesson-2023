// import logo from './logo.svg';
import './App.css';
import products from './Seed';
import ProductFunc from './ProductFunc';

// function Profile({img, name , age, email, hobby}){
//   // destructuring
//   // const {img, name , age, email, hobby} = props;
//   return (
//     <div className="profile">
//       <img src={img} alt="" />
//       <p>name: {name} </p>
//       <p>age: {age}</p>
//       <p>email: {email}</p>
//       <p>hobby: {hobby}</p>
//     </div>
//   )
// }


function App() {
  
  const productList = products.map((product)=>{
    console.log(product)
    return <ProductFunc title={product.title} id={product.id} description={product.description} url={product.votes} votes={product.votes} submitterAvatarUrl={product.submitterAvatarUrl} productImageUrl={product.productImageUrl}/>
  })
  
  return (
    // <div className="App">
      
    //   <Profile 
    //   img="avatars/daniel.jpg" 
    //   name="John Smith"
    //   age={20} 
    //   email="johnSmith@gmail.com"  
    //   hobby="likes to play guitar"
    //   />
    //   <Profile 
    //   img='avatars/helen.jpg'
    //   name="Helen"
    //   age={25}
    //   profession="Frontend Developer"
    //   />
    // </div>
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Product List</h1>
          <hr />
          {productList}
        </div>

      </header>

    </div>
  );
}

// function App (){
//   const user = {
//     img: 'avatars/helen.jpg',
//     name: "Helen", 
//     age: 25,
//     profession: "Frontend Developer"
//   }
//   return (
//     <div classNAme="app">
//       <Profile 
//       {...user}/>
//     </div>
//   )
// }


export default App;
