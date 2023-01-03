import logo4 from './products/image-rose.png';
import React from 'react';

class Product4 extends React.Component {
    render() {
        return (
            <div class="flex">
                <img class="image" src={logo4} alt="img" />
                <div class="text-container">
                    <h2><i class="fa-sharp fa-solid fa-caret-up text-danger"></i> 23</h2>
                    <p className="text-primary">Supermajority: The Fantasy Congress League</p>
                    <p>Earn points when your favorite politicians pass legislation.</p>
                    <div class="flex-div">
                        <p class="text-secondary">Submitted by: </p>
                        <img class="person rounded-circle" src="avatars/veronika.jpg" alt="image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product4