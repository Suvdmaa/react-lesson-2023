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

function ProductFunc(props) {
    return (
        <div class="flex">
            <img className="image" src={props.productImageUrl} alt="img" />
            <div class="text-container">
                <h2><i class="fa-sharp fa-solid fa-caret-up text-danger"></i> {props.number}</h2>
                <p className="text-primary">{props.title}</p>
                <p>{props.description}</p>
                <div class="flex-div" >
                    <p className="text-secondary">Submitted by: </p>
                    <img class="person rounded-circle" src={props.submitterAvatarUrl} alt="image" />
                </div>
            </div>

        </div>
    )
}

export default ProductFunc
