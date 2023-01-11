// import logo from './products/image-yellow.png';

// function ProductFunc() {
//     return (
//         <div class="flex">
//             <img className="image" src={logo} alt="img" />
//             <div class="text-container">
//                 <h2><i class="fa-sharp fa-solid fa-caret-up text-danger"></i> 55</h2>
//                 <p className="text-primary">Haught or Naught</p>
//                 <p>High-minded or absent-minded? You decide.</p>
//                 <div class="flex-div" >
//                     <p className="text-secondary">Submitted by: </p>
//                     <img class="person rounded-circle" src="avatars/daniel.jpg" alt="image" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProductFunc

import products from "./Seed"
import { useState } from "react";
import {Rating} from "react-simple-star-rating"



function ProductFunc(props) {
    const [votes, setVotes] = useState(props.votes);
    const [stars, setStars] = useState(props.stars)


    function handleUpVote(props) {
        setVotes(votes + 1)
        // setStars(stars + 1)

        if(stars > 5){
            setStars(0)
        }else{
            setStars(stars + 1)
        }
        
        // console.log(props.id)
        // let newProducts = []
        // const foundProduct = products.map(product =>{
        //     if(product.id === props.id){
        //         product.votes = product.votes + 1;
        //     }
        //     return product
        // })
        // console.log(foundProduct)
    }

    function handleDownVote(){
        setStars(stars - 1)
        setVotes(votes - 1)

        // if(stars > 5){
        //     setStars(0)
        // }else{
        //     setStars(stars - 1)
        // }
    }


    return (
        <div class="flex">
            <img className="image" src={props.productImageUrl} alt="img" />
            <div class="text-container">

                <h2><a onClick={() => props.onVote(props.id)}><i class="fa-sharp fa-solid fa-caret-up text-danger"></i></a>{votes}</h2>

                <h2><a onClick={() => {handleDownVote(props)}}>
                <i class="fa-solid fa-caret-down"></i>
                    </a></h2>

                <p className="text-primary">{props.title}</p>
                <p>{props.description}</p>
                <div class="flex-div" >
                    <p className="text-secondary">Submitted by: </p>
                    <img class="person rounded-circle" src={props.submitterAvatarUrl} alt="image" />
                </div>
               <Rating 
               initialValue={stars}
               />
            </div>
        </div>
    )
}

export default ProductFunc
