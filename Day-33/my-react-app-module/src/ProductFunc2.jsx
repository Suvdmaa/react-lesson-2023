import logo2 from './products/image-aqua.png';
function ProductFunc2(){
    return (
        <div class="flex">
                        <img className="image" src={logo2} alt="img" />
                        <div class="text-container">
                            <h2><i class="fa-sharp fa-solid fa-caret-up text-danger"></i> 44</h2>
                            <p className="text-primary">Yellow Pail</p>
                            <p>On-demand sand castle construction expertise.</p>
                            <div class="flex-div">
                                <p class="text-secondary">Submitted by: </p>
                                <img class="person rounded-circle" src="avatars/helen.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
    )
}
export default ProductFunc2