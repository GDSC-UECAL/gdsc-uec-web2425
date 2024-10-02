import { Link } from 'react-router-dom';
import "../assets/common/gdsc_logo.png"
import laptopic from '../assets/products/laptopic.png';
import "../components/ProductsCarousel.css"


function ProductsCarousel() {
    return (
        <>
            <div className="carouselcontainer">
                <div className="container">
                    <input className='rdbtn' type="radio" name="slider" id="itemm-1" checked></input>
                    <input className='rdbtn' type="radio" name="slider" id="itemm-2"></input>
                    <input className='rdbtn' type="radio" name="slider" id="itemm-3"></input>
                    <input className='rdbtn' type="radio" name="slider" id="itemm-4"></input>
                    <input className='rdbtn' type="radio" name="slider" id="itemm-5"></input>
                        <div className="cards">
                            <label className="prodcard" for="itemm-1" id="song-1">
                                <img className="eventpic" src={laptopic} alt="laptop" />
                            </label>
                            <label className="prodcard" for="itemm-2" id="song-2">
                                <img className="eventpic" src={laptopic} alt="laptop" />
                            </label>
                            <label className="prodcard" for="itemm-3" id="song-3">
                                <img className="eventpic" src={laptopic} alt="laptop" />
                            </label>
                            <label className="prodcard" for="itemm-4" id="song-4">
                                <img className="eventpic" src={laptopic} alt="laptop" />
                            </label>
                            <label className="prodcard" for="itemm-5" id="song-5">
                                <img className="eventpic" src={laptopic} alt="laptop" />
                            </label>
                        </div>
                </div>
            </div>
        </>


    );
}

export default ProductsCarousel;