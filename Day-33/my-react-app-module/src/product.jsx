import logo from './products/image-yellow.png';
import logo2 from './products/image-aqua.png';
import logo3 from './products/image-steel.png';
import logo4 from './products/image-rose.png';
import React from 'react';

class Product extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Popular Product</h1>
                    <hr />
                </header>
                <div>
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
                </div>

            </div>
        )
    }
}

export default Product


