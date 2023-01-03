import logo from './products/image-yellow.png';
import React from 'react';

class Product1 extends React.Component {
    render() {
        return (
            <div class="flex">
                <img className="image" src={logo} alt="img" />
                <div class="text-container">
                    <h2><i class="fa-sharp fa-solid fa-caret-up text-danger"></i> 55</h2>
                    <p className="text-primary">Haught or Naught</p>
                    <p>High-minded or absent-minded? You decide.</p>
                    <div class="flex-div" >
                        <p className="text-secondary">Submitted by: </p>
                        <img class="person rounded-circle" src="avatars/daniel.jpg" alt="image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product1