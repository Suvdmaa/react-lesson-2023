import logo3 from './products/image-steel.png';
import React from 'react';

class Product3 extends React.Component {
    render() {
        return (
            <div class="flex">
                <img class="image" src={logo3} alt="img" />
                <div class="text-container">
                    <h2><i class="fa-sharp fa-solid fa-caret-up text-danger"></i> 42</h2>
                    <p className="text-primary">Tinfoild: Tailored tinfoil hats</p>
                    <p>We already have your measurements and shipping address.</p>
                    <div class="flex-div">
                        <p class="text-secondary">Submitted by: </p>
                        <img class="person rounded-circle" src="avatars/matthew.png" alt="image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product3