import { Link } from 'react-router-dom';
import "../assets/common/gdsc_logo.png"
import laptopic from '../assets/products/laptopic.png';
import laptopic2 from '../assets/products/laptopic.png';




function ProductsCarousel() {
    return (
        <>
            <div class="carouselcontainer">
                <div class="container">
                    <input type="radio" name="slider" id="item-1" checked></input>
                    <input type="radio" name="slider" id="item-2"></input>
                    <input type="radio" name="slider" id="item-3"></input>
                    <input type="radio" name="slider" id="item-4"></input>
                    <input type="radio" name="slider" id="item-5"></input>
                        <div class="cards">
                            <label class="card" for="item-1" id="song-1">
                                <img src={laptopic2} alt="laptop" />
                            </label>
                            <label class="card" for="item-2" id="song-2">
                                <img src={laptopic} alt="laptop" />
                            </label>
                            <label class="card" for="item-3" id="song-3">
                                <img src={laptopic} alt="laptop" />
                            </label>
                            <label class="card" for="item-4" id="song-4">
                                <img src={laptopic} alt="laptop" />
                            </label>
                            <label class="card" for="item-5" id="song-5">
                                <img src={laptopic} alt="laptop" />
                            </label>
                        </div>
                </div>
            </div>
        </>


    );
}

export default ProductsCarousel;